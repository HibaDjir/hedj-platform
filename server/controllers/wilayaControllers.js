// wilayaController.js
const Wilaya = require('../models/wilaya');

// Controller method to fetch all wilayas
exports.getAllWilayas = async (req, res) => {
    try {
        const wilayas = await Wilaya.find();
        res.json(wilayas);
        console.log('willaya fetch succesfully !')
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
