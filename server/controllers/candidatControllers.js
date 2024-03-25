// const Candidate = require("../models/candidat");

// // Controller method to add a new candidate
// exports.addCandidat = async (req, res) => {
//   try {
//     // Extract candidate data from request body
//     const { firstName, lastName, wilaya, daira, dateOfBirth, sex } = req.body;
    
//     // Assuming req.user is populated by authentication middleware with the current user
//     const addedBy = req.user._id;

//     // Create a new candidate instance
//     const newCandidate = new Candidate({
//       firstName,
//       lastName,
//       wilaya,
//       daira,
//       dateOfBirth,
//       sex,
//       addedBy
//     });

//     // Save the candidate to the database
//     await newCandidate.save();

//     res.status(201).json({ message: "Candidatadded successfully" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// };

// // Other controller methods for fetching wilayas, dairas
///////////////////////////////


const Candidat= require('../models/candidat.js');

exports.addCandidat = async (req, res) => {
    try {
        // Extract user ID from request
        const userId = req.user._id;

        // Extract candidate data from request body
        const { firstName, lastName,  dateofbirth,palceofbirth,nation,socialstat,gender,passport,phone,email,adressepost,blood,healthnum,healthstatus,wil,dair} = req.body;

        // Check if the candidate is female and require MAHRAM candidate
        if (gender === 'female') {
            // Extract MAHRAM candidate data from request body
            const { mahramFirstName, mahramLastName , mahramdateofbirth,mahrampalceofbirth,mahramnation,mahramsocialstat,mahramblood,mahramhealnum,mahramhealthstatus,mahrampassport,mahramphone,mahramemail,mahramwil,mahramdair,mahramadressepost } = req.body;
            
            // Create MAHRAM candidate
            const mahramCandidat = await new Candidat({
                firstName: mahramFirstName,
                lastName: mahramLastName,
                dateofbirth:mahramdateofbirth,
                palceofbirth:mahrampalceofbirth,
                nation:mahramnation,
                adressepost:mahramadressepost,
                socialstat:mahramsocialstat,
                gender: 'male', // Assuming MAHRAM candidate is always male
                healthstatus:mahramhealthstatus,
                passport:mahrampassport,
                phone:mahramphone,
                email:mahramemail,
                wil:mahramwil,
                dair:mahramdair,

                user: userId
            }).save();

            // Create female candidate with link to MAHRAM candidate
            const candidat = await new Candidat({
                firstName,
                lastName,
                gender,  
                dateofbirth,
                palceofbirth,
                nation,
                adressepost,
                healthstatus,
                passport,
                socialstat,
                phone,
                email,
                wil,
                dair,
                user: userId,
                mahram: mahramCandidat._id
            }).save();

            return res.status(201).json({ message: 'Candidates added successfully', candidat });
        } else {
            // Create male candidate
            const candidat = await new Candidat({
                firstName,
                lastName,
                gender,
                dateofbirth,
                palceofbirth,
                nation,
                adressepost,
                healthstatus,
                passport,
                socialstat,
                phone,
                email,
                wil,
                dair,
                user: userId
            }).save();

            return res.status(201).json({ message: 'Candidate added successfully', candidat });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};
