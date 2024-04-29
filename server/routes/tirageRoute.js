const express = require('express');
const router = express.Router();
const Candidature = require('../models/Candidature');

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

// Route for electing pilgrims
router.post('/elect', async (req, res) => {
    try {
        const { nombreAElire } = req.body; // Extract the number of pilgrims to be elected from the request body

        // Call the function to elect pilgrims
        const selectedPilgrims = await electPilgrims(nombreAElire);

        // You can now do whatever you want with the selected pilgrims, such as saving them to the database or sending them in the response
        // For demonstration purposes, we'll just send them in the response
        res.json({ selectedPilgrims });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;


