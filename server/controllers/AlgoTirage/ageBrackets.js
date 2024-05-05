
const Candidature = require("../../models/Candidature");
const { setStatus } = require('./clcPrctg');
const pelerin = require('../../models/pelerin');

function mappingUsers(ageBrackets, users) {
    const currentDate = new Date();

    let weightedUsers = users.map(user => {
        let weight = 1;
        for (let bracket of ageBrackets) {

            const dob = new Date(user.date_naissance);
            let age = currentDate.getFullYear() - dob.getFullYear();
            if (currentDate.getMonth() < dob.getMonth() || (currentDate.getMonth() === dob.getMonth() && currentDate.getDate() < dob.getDate())) {
                age--;
            }

            if (age >= bracket.minAge && age <= bracket.maxAge) {
                weight += bracket.chanceBonus / 100;
                break;
            }
        }
        return { user, weight };
    });

    return { weightedUsers };
}

async function performLottery(nbPlaces, weightedUsers) {

    try {
        let winners = [];
        let totalWeight = weightedUsers.reduce((acc, { weight }) => acc + weight, 0);


        while (winners.length < nbPlaces && weightedUsers.length > 0) {
            let random = Math.random() * totalWeight;
            
            for (let i = 0;  i < weightedUsers.length; i++) {//original:  for (let i = 0; i < weightedUsers.length; i++)
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
                            while (userMahremIndex<weightedUsers.length && !mahremFound) {
                                const userObj = weightedUsers[userMahremIndex];
                                if (userObj.user._id.toString() === user.id_mahrem) {
                                    mahremFound = true;
                                    userMahrem = userObj.user;
                                    weightMahrem = userObj.weight;
                                    break;
                                }else{
                                userMahremIndex++;
                                }
                            }

                            if (!mahremFound) {
                               
                                totalWeight -= weight;
                                weightedUsers.splice(i, 1)
                                winners.push(user); 
                                break;
                            } else {
                                continue
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
                        while ( userMahremIndex<weightedUsers.length && !mahremFound ) {
                            const userObj = weightedUsers[userMahremIndex];
                            if (userObj.user._id.toString() === userF.id_mahrem) {
                                mahremFound = true;
                                userMahrem = userObj.user;
                                weightMahrem = userObj.weight;
                                break;
                                
                            }else{
                            userMahremIndex++;}
                        }

                        if (mahremFound) { //si le mahrem existe dans weighted user
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

exports.elecPilgrimsCumDist = async (req, res) => {

    const { ageBrackets, nbPlaces, nbEnAttente } = req.body
    const users = await Candidature.find();

    try {
        const { weightedUsers } = mappingUsers(ageBrackets, users)
        const { winners, weightedUsers: weightedRestants } = await performLottery(nbPlaces, weightedUsers)
        console.log("weighted en restants", weightedRestants)
        //set status of winners
        const pelerinsElu = setStatus(winners, "is_elected")
        //the winners
        console.log("winners are: ", winners)
        const { winners: attente, weightedUsers: weightedUsersEnAtt } = await performLottery(nbEnAttente, weightedRestants)
        
        //set status of attente
        const pelerinEnAttente = setStatus(attente, "is_enAttent")
        //the attente
        console.log("en attente are: ", attente)

        //into pelerin db
        let allPelerins = [...pelerinsElu, ...pelerinEnAttente];
        for (let  pelerinData of allPelerins) { 
            try { 
                // Create a new Pelerin document 
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

}
