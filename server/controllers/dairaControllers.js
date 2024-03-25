// dairaControllers.js



const Daira = require('../models/daira');

// Controller method to fetch all dairas
exports.getAllDairas = async (req, res) => {
    try {
        const dairas = await Daira.find();
        res.json(dairas);
        console.log('daira fetched succesfully !')
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
