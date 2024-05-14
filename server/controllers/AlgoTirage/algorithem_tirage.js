 const candidats=require('../../models/Candidature')
const tirage_type=require('../../models/TirageType')

async function updateCandidat(pelerinPrise){
    
        try {
            for(let pelerin of pelerinPrise){
                const criteria = { '_id': pelerin._id };
        
                const update = {
                    $set: {
                        is_elected: true,
                        is_attente: false
                    }
                };
                const result = await candidats.updateOne(criteria, update, {upsert: true});

                return 'records updated successfully';
            }
            //return result.nModified;//res.status(200).json({ message: `${result.nModified} records updated successfully` });
        } catch (error) {
            return 'Internal server error' ;
           // return 'Internal server error';// res.status(500).json({ message: 'Internal server error' });
        }
}


async function updateCandidatAtt(pelerinPrise_att){
    
    try {
        for(let pelerin of pelerinPrise_att){
            const criteria = { '_id': pelerin._id };
    
            const update = {
                $set: {
                    is_elected: false,
                    is_attente: true
                }
            };
            const result = await candidats.updateOne(criteria, update, {upsert: true});

            return 'records updated successfully';
        }
        //return result.nModified;//res.status(200).json({ message: `${result.nModified} records updated successfully` });
    } catch (error) {
        return 'Internal server error' ;
       // return 'Internal server error';// res.status(500).json({ message: 'Internal server error' });
    }
}

async function tirageAliatoire(nbrTotalPelerin, commune_code, session_id){
    try {
        const candidatures = await candidats.find({id_session: session_id, commune: commune_code});
        let pelerinPrise = [];//car une fois dans l'année
         let nbr_en_cours = 0;let candidature_tirage = [...candidatures]; 
        
        //console.error("---- 0 -->", candidature_tirage.length, nbr_en_cours);

        while (nbr_en_cours < nbrTotalPelerin){//cas ou il y a moins de candidat que le cotat
            const rslt_random = Math.floor(Math.random() * candidature_tirage.length);
            if(nbr_en_cours < candidature_tirage.length
                && (pelerinPrise.findIndex(pelerin => pelerin._id === candidature_tirage[rslt_random]._id)) === -1 
                && candidature_tirage[rslt_random].id_session === session_id && candidature_tirage[rslt_random].commune === commune_code){
                if(candidature_tirage[rslt_random].genre==='ذكر'){
                    pelerinPrise.push(candidature_tirage[rslt_random])
                    //candidature_tirage.splice(rslt_random, 1);
                    nbr_en_cours+=1;
                }else if (nbr_en_cours < (nbrTotalPelerin-1)
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
        updateCandidat(pelerinPrise);
        let nbrTotalPelerin_att = Math.ceil((nbrTotalPelerin * 0.3))
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
        updateCandidatAtt(pelerinPrise_att);
    } catch (error) {
        throw error;
    }
}

async function tirageNbrCandidat(nbrTotalPelerin, commune_code, session_id){
    
    try {
        let pelerinPrise = [];
        const candidatures = await candidats.find({
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
        updateCandidat(pelerinPrise);
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
        updateCandidatAtt(pelerinPrise_att);
    } catch (error) {
        throw new Error('Error selecting pilgrims');
    }
}

function getDateFromAge(age) {
    const today = new Date();
    const yearOfBirth = today.getFullYear() - age;
    const dateOfBirth = new Date(yearOfBirth, today.getMonth(), today.getDate());
    return dateOfBirth;
}

async function tirageAgeBrackets(nbrTotalPelerinT, commune_code, session_id, ageBrackets){
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
        if(nbr_en_cours > nbrTotalPelerin) break;
        const minDate = getDateFromAge(minAge);
        const maxDate = getDateFromAge(maxAge);
        try {
            const candidatures = await candidats.find({
                id_session: session_id, 
                commune: commune_code, 
                'date_naissance': {
                    $gte: maxDate,
                    $lt: minDate
                }
            });
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
            throw new Error('Error selecting pilgrims');
        }
        i+=1;
    }
    const candidatures = await candidats.find({id_session: session_id, commune: commune_code});
    let candidature_tirage = [...candidatures];
    //console.error(rslt_random, candidature_tirage.length, nbr_en_cours);

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
    updateCandidat(pelerinPrise);

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
    updateCandidatAtt(pelerinPrise_att);
}

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
        const minDate = getDateFromAge(minAge);
        const maxDate = getDateFromAge(maxAge);
        try {
            const candidatures = await candidats.find({
                id_session: session_id, 
                commune: commune_code, 
                'date_naissance': {
                    $gte: maxDate,
                    $lt: minDate
                }
            }).sort({ nbr_enregistrement: -1 });
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
            throw new Error('Error selecting pilgrims');
        }
        i+=1;
    }
    const candidatures = await candidats.find({id_session: session_id, commune: commune_code});
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
    updateCandidat(pelerinPrise);

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
    updateCandidatAtt(pelerinPrise_att);
}

const calculeTirageType = async (req, res) => {
    const { id_session, commune, nbrTotalPelerin, code_algo } = req.body;
    try {
        const tir_type = await tirage_type.findOne({'code': code_algo})
        if(code_algo === 'AL') tirageAliatoire(nbrTotalPelerin, commune, id_session);
        if(code_algo === 'NC') tirageNbrCandidat(nbrTotalPelerin, commune, id_session);
        if(code_algo === 'PA') tirageAgeBrackets(nbrTotalPelerin, commune, id_session, tir_type);
        if(code_algo === 'PF') tiragePerformant(nbrTotalPelerin, commune, id_session, tir_type);

        return res.status(200).json({ message: `${tir_type} records updated successfully` });
        
    } catch (error) {

        return res.status(400).json({ message: `${tir_type} records updated successfully` });
    }
}

module.exports = {
    calculeTirageType
}