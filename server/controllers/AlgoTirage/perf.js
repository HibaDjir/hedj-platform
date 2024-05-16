const express = require('express');
const router = express.Router();
const Candidature = require('../../models/Candidature');
const pelerin = require('../../models/pelerin');
const { setStatus } = require('./clcPrctg');

function getDateFromAge(age) {
    const today = new Date();
    const yearOfBirth = today.getFullYear() - age;
    const dateOfBirth = new Date(Date.UTC(yearOfBirth, today.getMonth(), today.getDate()));
    return dateOfBirth;
}

// Function to elect pilgrims based on nombreAElire with higher chance for candidates with higher nbr_enregistrement
async function tiragePerformant(nbrTotalPelerinT, commune_code, session_id, ageBrackets){
    let nbr_en_cours = 0;let pelerinPrise = []; 
    let i = 0, minAge=0, maxAge=0;
    let nbrTotalPelerin = 0;
    while (i<3) {
        if(i === 0){
            minAge = ageBrackets.minAge1; maxAge = ageBrackets.maxAge1; 
            nbrTotalPelerin = Math.ceil((nbrTotalPelerinT * (ageBrackets.chance1/100)));
        } else if(i === 1){
            minAge = ageBrackets.minAge2; maxAge = ageBrackets.maxAge2;
            nbrTotalPelerin = Math.ceil((nbrTotalPelerinT * (ageBrackets.chance2/100)));
        } else {
            minAge = ageBrackets.minAge3; maxAge = ageBrackets.maxAge3;
            nbrTotalPelerin = Math.ceil((nbrTotalPelerinT * (ageBrackets.chance3/100)));
        }
        //console.error("----- > ", nbrTotalPelerin, nbrTotalPelerinT);
        if(nbr_en_cours > nbrTotalPelerin) break;
        const maxDate = getDateFromAge(minAge); // Latest date of birth (youngest candidate)
        const minDate = getDateFromAge(maxAge); // Earliest date of birth (oldest candidate)
        
        console.log(minDate)
        try {
            const candidatures = await Candidature.find({
                id_session: session_id, 
                commune: commune_code, 
                date_naissance: {
                    $gte: maxDate,
                    $lt: minDate
                }
            }).sort({ nbr_enregistrement: -1 });

            console.log("cand", candidatures)
            let candidature_tirage = [...candidatures];
            for (let candidature of candidature_tirage) /* (nbr_en_cours <= nbrTotalPelerin)*/{
                if(nbr_en_cours > nbrTotalPelerin) break;
                if(nbr_en_cours < nbrTotalPelerin && (pelerinPrise.findIndex(pelerin => pelerin._id=== candidature._id)) === -1){
                    let rslt_index = candidature_tirage.findIndex(pelerin => pelerin._id === candidature._id);
                    if(candidature.genre==='ذكر'){
                        pelerinPrise.push(candidature);
                        nbr_en_cours+=1;
                    }else if (nbr_en_cours < nbrTotalPelerin-1 && candidature.genre==='أنثى'){
                        let male_index = candidature_tirage.findIndex(pelerin => pelerin.male_index === candidature.id_mahrem);
                        pelerinPrise.push(candidature)
                        nbr_en_cours+=1;
                        if(male_index > -1 && (pelerinPrise.findIndex(pelerin => pelerin._id === candidature.id_mahrem)) === -1){
                            pelerinPrise.push(candidature_tirage[male_index]);
                            nbr_en_cours+=1;
                        } 
                    }
                }
            }
        } catch (error) {
            console.log(error.message)
             res.status(500).json({message: error.message})
            // throw new Error('Error selecting pilgrims');
        }
        i+=1;
    }
    const candidatures = await Candidature.find({id_session: session_id, commune: commune_code});
    let candidature_tirage = [...candidatures];

    while (nbr_en_cours < nbrTotalPelerinT){//cas ou il y a moins de candidat que le cotat
        const rslt_random = Math.floor(Math.random() * candidature_tirage.length);
        if(nbr_en_cours < candidature_tirage.length
            && (pelerinPrise.findIndex(pelerin => pelerin._id === candidature_tirage[rslt_random]._id)) === -1 
            && candidature_tirage[rslt_random].id_session === session_id && candidature_tirage[rslt_random].commune === commune_code){
            if(candidature_tirage[rslt_random].genre==='ذكر'){
                pelerinPrise.push(candidature_tirage[rslt_random])
                //candidature_tirage.splice(rslt_random, 1);
                nbr_en_cours+=1;
            }else if (nbr_en_cours < (nbrTotalPelerinT-1)
                && (pelerinPrise.findIndex(pelerin => pelerin._id === candidature_tirage[rslt_random]._id)) === -1 
                && candidature_tirage[rslt_random].genre==='أنثى'){
                let male_index = candidature_tirage.findIndex(pelerin => pelerin._id === candidature_tirage[rslt_random].id_mahrem);
                pelerinPrise.push(candidature_tirage[rslt_random])
                //candidature_tirage.splice(rslt_random, 1);
                nbr_en_cours+=1;
                if(male_index > -1 && (pelerinPrise.findIndex(pelerin => pelerin._id === candidature_tirage[rslt_random].id_mahrem)) === -1){
                    pelerinPrise.push(candidature_tirage[male_index])
                    //candidature_tirage.splice(male_index, 1);
                    nbr_en_cours+=1;
                }
            }
        }
    }

    let nbrTotalPelerin_att = Math.ceil((nbrTotalPelerinT * 0.3))
    nbr_en_cours = 0
    let pelerinPrise_att = [];

    while (nbr_en_cours < nbrTotalPelerin_att){//cas ou il y a moins de candidat que le cotat
        const rslt_random = Math.floor(Math.random() * candidature_tirage.length);
        if(nbr_en_cours < candidature_tirage.length && candidature_tirage[rslt_random].id_session === session_id && candidature_tirage[rslt_random].commune === commune_code){
            if( (pelerinPrise.findIndex(pelerin => pelerin._id === candidature_tirage[rslt_random]._id)) === -1
                && (pelerinPrise_att.findIndex(pelerin => pelerin._id === candidature_tirage[rslt_random]._id)) === -1
                && candidature_tirage[rslt_random].genre==='ذكر'){
                pelerinPrise_att.push(candidature_tirage[rslt_random])
                //candidature_tirage.splice(rslt_random, 1);
                nbr_en_cours+=1;
            }else if (nbr_en_cours < (nbrTotalPelerin_att-1) 
                    && (pelerinPrise.findIndex(pelerin => pelerin._id === candidature_tirage[rslt_random]._id)) === -1
                    && (pelerinPrise_att.findIndex(pelerin => pelerin._id === candidature_tirage[rslt_random]._id)) === -1
                    && candidature_tirage[rslt_random].genre==='أنثى'){
                let male_index = candidature_tirage.findIndex(pelerin => pelerin._id === candidature_tirage[rslt_random].id_mahrem);
                pelerinPrise_att.push(candidature_tirage[rslt_random])
                //candidature_tirage.splice(rslt_random, 1);
                nbr_en_cours+=1;
                if(male_index > -1 
                    && (pelerinPrise.findIndex(pelerin => pelerin._id === candidature_tirage[rslt_random].id_mahrem)) === -1
                    && (pelerinPrise_att.findIndex(pelerin => pelerin._id === candidature_tirage[rslt_random].id_mahrem)) === -1    
                ){
                    pelerinPrise_att.push(candidature_tirage[male_index])
                    //candidature_tirage.splice(male_index, 1);
                    nbr_en_cours+=1;
                }
            }
        }
    }
    return {pelerinPrise, pelerinPrise_att}
}

exports.perfCtrlr = async (req, res) => {
    try {
        const { ageBrackets_perf, nbrTotalPelerin, commune , session} = req.body; // Extract the number of pilgrims to be elected from the request body

        const transformedAgeBrackets = {
            minAge1: ageBrackets_perf[0].minAge1,
            maxAge1: ageBrackets_perf[0].maxAge1,
            chance1: ageBrackets_perf[0].chance1,
            minAge2: ageBrackets_perf[0].minAge2,
            maxAge2: ageBrackets_perf[0].maxAge2,
            chance2: ageBrackets_perf[0].chance2,
            minAge3: ageBrackets_perf[0].minAge3,
            maxAge3: ageBrackets_perf[0].maxAge3,
            chance3: ageBrackets_perf[0].chance3
        };
        const {pelerinPrise: selectedPilgrims, pelerinPrise_att: pelerinsAtt} = await tiragePerformant(nbrTotalPelerin, commune, session, transformedAgeBrackets);

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

