const express = require('express');
const router = express.Router();
const Candidature = require('../../models/Candidature');
const pelerin = require('../../models/pelerin');
const { setStatus } = require('./clcPrctg');

// Function to elect pilgrims based on nombreAElire with higher chance for candidates with higher nbr_enregistrement
async function electPilgrims(nombreAElire) {
    try {
        const pilgrims = await Candidature.find().sort({ nbr_enregistrement: -1 });
        const totalPilgrims = pilgrims.length;
        const numberOfSelected = Math.min(nombreAElire, totalPilgrims);
        const highChanceCount = Math.floor(totalPilgrims * 0.4);
        let selectedPilgrims = [];
        let selectedReferences = [];

        for (let i = 0; i < numberOfSelected; i++) {
            const hasHigherChance = i < highChanceCount;
            const index = hasHigherChance ? Math.floor(Math.random() * highChanceCount) : Math.floor(Math.random() * totalPilgrims);
            const selectedPilgrim = pilgrims[index];

            if (selectedPilgrim.genre === 'أنثى' && selectedPilgrim.id_mahrem) {
                const malePilgrim = pilgrims.find(pilgrim => pilgrim._id.toString() === selectedPilgrim.id_mahrem);
                if (malePilgrim && !selectedReferences.includes(malePilgrim._id.toString())) {
                    selectedPilgrims.push(selectedPilgrim);
                    selectedPilgrims.push(malePilgrim);
                    selectedReferences.push(selectedPilgrim._id.toString());
                    selectedReferences.push(malePilgrim._id.toString());
                } else {
                    selectedPilgrims.push(selectedPilgrim);
                    selectedReferences.push(selectedPilgrim._id.toString());
                }
            } else {
                selectedPilgrims.push(selectedPilgrim);
                selectedReferences.push(selectedPilgrim._id.toString());
            }
        }

        return selectedPilgrims;
    } catch (error) {
        console.error(error);
        throw new Error('Error selecting pilgrims');
    }
}

async function performLottery(nbPlaces, weightedUsers) {
    try {
        let winners = [];
        let totalWeight = weightedUsers.reduce((acc, { weight }) => acc + weight, 0);

        while (winners.length < nbPlaces && weightedUsers.length > 0) {
            let random = Math.random() * totalWeight;
            
            for (let i = 0;  i < weightedUsers.length; i++) {
                const { user, weight } = weightedUsers[i];

                if (random < weight) {
                    if (winners.length === nbPlaces - 1) {
                        if (user.genre === "ذكر") {
                            winners.push(user);
                            totalWeight -= weight;
                            weightedUsers.splice(i, 1);
                            break;
                        } else if (user.genre === "أنثى") {
                            let mahremFound = false;
                            let userMahremIndex = 0;
                            while (userMahremIndex < weightedUsers.length && !mahremFound) {
                                const userObj = weightedUsers[userMahremIndex];
                                if (userObj.user._id.toString() === user.id_mahrem) {
                                    mahremFound = true;
                                    userMahrem = userObj.user;
                                    weightMahrem = userObj.weight;
                                    break;
                                } else {
                                    userMahremIndex++;
                                }
                            }

                            if (!mahremFound) {
                                totalWeight -= weight;
                                weightedUsers.splice(i, 1)
                                winners.push(user); 
                                break;
                            } else {
                                continue;
                            }
                        }
                    }

                    weightedUsers.splice(i, 1);

                    if (user.genre === "ذكر") {
                        winners.push(user);
                        totalWeight -= weight;
                        break;
                    } else if (user.genre === "أنثى") {
                        const userF = user
                        let mahremFound = false;
                        let userMahremIndex = 0;
                        while (userMahremIndex < weightedUsers.length && !mahremFound) {
                            const userObj = weightedUsers[userMahremIndex];
                            if (userObj.user._id.toString() === userF.id_mahrem) {
                                mahremFound = true;
                                userMahrem = userObj.user;
                                weightMahrem = userObj.weight;
                                break;
                            } else {
                                userMahremIndex++;
                            }
                        }

                        if (mahremFound) { 
                            totalWeight -= weightMahrem;
                            weightedUsers.splice(userMahremIndex, 1);
                            winners.push(userF)
                            winners.push(userMahrem);
                            totalWeight -= weight;
                            break;
                        } else if (winners.length < nbPlaces - 2) {
                            winners.push(userF)
                            totalWeight -= weight;  
                            break;
                        }
                    }
                } else {
                    random -= weight;
                }
            }
        }
        return { winners, weightedUsers };
    } catch (error) {
        console.error('Lottery error:', error);
        throw error;
    }
}

router.post('/elect', async (req, res) => {
    try {
        const { nombreAElire } = req.body; 
        const selectedPilgrims = await electPilgrims(nombreAElire);
        res.json({ selectedPilgrims });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

router.post('/elecPilgrimsCumDist', async (req, res) => {
    const { ageBrackets, nbPlaces, nbEnAttente } = req.body
    const users = await Candidature.find();

    try {
        const { weightedUsers } = mappingUsers(ageBrackets, users)
        const { winners, weightedUsers: weightedRestants } = await performLottery(nbPlaces, weightedUsers)

        const pelerinsElu = setStatus(winners, "is_elected")

        const { winners: attente, weightedUsers: weightedUsersEnAtt } = await performLottery(nbEnAttente, weightedRestants)
        
        const pelerinEnAttente = setStatus(attente, "is_enAttent")

        let allPelerins = [...pelerinsElu, ...pelerinEnAttente];
        for (let  pelerinData of allPelerins) { 
            try { 
                const newPelerin = await pelerin.create({ Candidature: pelerinData._id }); 
                console.log('New pelerin created:', newPelerin); 
            } catch (error) { 
                console.error('Error creating pelerin:', error); 
            } 
        }

        res.status(200).json(winners)
    } catch (error) {
        res.status(500).send(error.message)
    }
});

module.exports = router;
