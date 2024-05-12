
const tirage_type = require('../models/TirageType')

const getAllTirageType = async (req, res) => {
    try {
        const tirage_types = await tirage_type.find({}).sort({createAt: -1})
        res.status(200).json(tirage_types)
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message })
    }

}

const getTirageType = async (req, res) => {
    const code = req.query.fieldName; 
    const fieldValue = req.query.fieldValue;
    
    const tir_type = await tirage_type.findOne({[code]: fieldValue})
    if(!tir_type){
        return res.status(404).json({error: "vide"})
    }
    res.status(200).json(tir_type)
}

const createTirageType = async (req, res) => {
    const tirage_type_data = req.body;
    try {
        const tir_type = await tirage_type.insertMany(tirage_type_data)
        res.status(200).json(tir_type)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const updateTirageType = async (req, res) => {
    try {
        const { minAge1, maxAge1, chance1, minAge2, maxAge2, chance2, minAge3, maxAge3, chance3 } = req.body;
        const criteria = { 'code': 'PA' };
        const update = {
            $set: {
                minAge1: minAge1,
                maxAge1: maxAge1,
                chance1: chance1,
                minAge2: minAge2,
                maxAge2: maxAge2,
                chance2: chance2,
                minAge3: minAge3,
                maxAge3: maxAge3,
                chance3: chance3
            }
        };

        // Update the documents that match the criteria
        const result = await tirage_type.updateOne(criteria, update, {upsert: true});

        return res.status(200).json({ message: `${result.nModified} records updated successfully` });
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = {
    getAllTirageType,
    getTirageType,
    createTirageType,
    updateTirageType
}