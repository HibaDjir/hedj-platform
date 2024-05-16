const express = require('express');
const router = express.Router();
const Candidature = require('../../models/Candidature');
const sendEmail=require('../../util/sendEmail');
const pelerin = require('../../models/pelerin')




function envoieEmail(pelerinsElus){
    try {
        const emailEnvoie = pelerinsElus.map(pelerin => {
            console.log('EVOIE MAIL: PELERIN EMAIL',pelerin.email)
            console.log('EVOIE MAIL: PELERIN NOM',pelerin.nom)
            console.log('EVOIE MAIL: PELERIN PRENOM',pelerin.prenom)
                sendEmail({
                    email: pelerin.email,
                    subject:'السلام عليكم',
                    message:
                    `سيد(ة)  ${pelerin.nom}!\n\n
                    مبارك لكم، لقد تم اختياركم في القرعة لأداء مناسك الحج\n
                    **معلوماتكم الشخصية**\n\n
                    اللقب :${pelerin.nom}\n\n
                    الاسم :${pelerin.prenom}\n\n
                    رقم جواز السفر :${pelerin.num_passeport}\n
                    `
           });
        })
    } catch (error) {   
        console.log(error)
    }
}

// Function to elect pilgrims based on nombreAElire with higher chance for candidates with higher nbr_enregistrement


async function tirageNbrCandidat(nbrTotalPelerin, commune_code, session_id){
    
    try {
        let pelerinPrise = [];
        const candidatures = await Candidature.find({
            id_session: session_id, 
            commune: commune_code
        }).sort({ nbr_enregistrement: -1 });
         let nbr_en_cours = 0;let candidature_tirage = [...candidatures];
        for (let candidature of candidature_tirage) /* (nbr_en_cours <= nbrTotalPelerin)*/{
            if(nbr_en_cours > nbrTotalPelerin) break;
            if(nbr_en_cours < nbrTotalPelerin && (pelerinPrise.findIndex(pelerin => pelerin._id === candidature._id)) === -1){
                let rslt_index = candidature_tirage.findIndex(pelerin => pelerin._id === candidature._id);
                if(candidature.genre==='ذكر'){
                    pelerinPrise.push(candidature);
                    nbr_en_cours+=1;
                }else if (nbr_en_cours < nbrTotalPelerin-1 && candidature.genre==='أنثى'){
                    let male_index = candidature_tirage.findIndex(pelerin => pelerin._id === candidature.id_mahrem);
                    pelerinPrise.push(candidature)
                    nbr_en_cours+=1;
                    if(male_index > -1 && (pelerinPrise.findIndex(pelerin => pelerin._id === candidature.id_mahrem)) === -1){
                        pelerinPrise.push(candidature_tirage[male_index]);
                        nbr_en_cours+=1;
                    } 
                }
            }
        }
        let nbrTotalPelerin_att = Math.ceil((nbrTotalPelerin * 0.3))
        let pelerinPrise_att = []; nbr_en_cours = 0;
        for (let candidature of candidature_tirage) /* (nbr_en_cours <= nbrTotalPelerin)*/{
            if(nbr_en_cours > nbrTotalPelerin_att) break;
            if(nbr_en_cours < nbrTotalPelerin_att && (pelerinPrise.findIndex(pelerin => pelerin._id === candidature._id)) === -1 
                && (pelerinPrise_att.findIndex(pelerin => pelerin._id === candidature._id)) === -1){
                let rslt_index = candidature_tirage.findIndex(pelerin => pelerin._id === candidature._id);
                if(candidature.genre==='ذكر'){
                    pelerinPrise_att.push(candidature);
                    nbr_en_cours+=1;
                }else if (nbr_en_cours < nbrTotalPelerin_att-1 && candidature.genre==='أنثى'){
                    let male_index = candidature_tirage.findIndex(pelerin => pelerin._id === candidature.id_mahrem);
                    pelerinPrise_att.push(candidature)
                    nbr_en_cours+=1;
                    if(male_index > -1 
                        && (pelerinPrise.findIndex(pelerin => pelerin._id === candidature.id_mahrem)) === -1
                        && (pelerinPrise_att.findIndex(pelerin => pelerin._id === candidature.id_mahrem)) === -1){
                        pelerinPrise_att.push(candidature_tirage[male_index]);
                        nbr_en_cours+=1;
                    } 
                }
            }
        }
        return {pelerinPrise,pelerinPrise_att}
    } catch (error) {
        throw new Error('Error selecting pilgrims');
    }
}

// Route for electing pilgrims
exports.nbrEnregAlgo = async (req, res) => {
    try {
        const { nbrTotalPelerin, commune , session} = req.body; // Extract the number of pilgrims to be elected from the request body


        const {pelerinPrise: selectedPilgrims, pelerinPrise_att: pelerinsAtt} = await tirageNbrCandidat(nbrTotalPelerin, commune, session);

        let candid = await Candidature.updateMany( 
            { _id: { $in: selectedPilgrims.map(pelerin => pelerin._id) } }, // Find candidatures associated with the updated pelerins 
            { $set: { status: "is_elected" } },
            {$set: { is_elected: true } } // Update their status to "is-elected" 
          );

          let candidAtt = await Candidature.updateMany( 
            { _id: { $in: pelerinsAtt.map(pelerin => pelerin._id) } }, // Find candidatures associated with the updated pelerins 
            { $set: { status: "is_enAttent" } },
            {$set: { is_attente: true } } // Update their status to "is-elected" 
          );

         envoieEmail(selectedPilgrims)

         let allPelerins = [...selectedPilgrims, ...pelerinsAtt];

         for (let  pelerinData of allPelerins) { 
            try { 
                // Create a new Pelerin document 
                const newPelerin = await pelerin.create({ Candidature: pelerinData._id }); 
                console.log('New pelerin created:', newPelerin); 
            } catch (error) { 
                console.error('Error creating pelerin:', error); 
            } 
        }

        // You can now do whatever you want with the selected pilgrims, such as saving them to the database or sending them in the response
        // For demonstration purposes, we'll just send them in the response
        res.json(selectedPilgrims);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}

