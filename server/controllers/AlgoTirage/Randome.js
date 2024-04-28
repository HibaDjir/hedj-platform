
const Condidatures=require('../../models/Candidature')
const Commune =require('../../models/Commune')
const clc = require('./clcPrctg')

// Function for electing a specific number of pilgrims randomly
function electionPelerinsAuHasard(pelerins, nombreAElire) {
    // Check if the number to be elected is greater than the total number of pilgrims
    if (nombreAElire > pelerins.length) {
        return "Error: The number to be elected is greater than the total number of pilgrims";
    }

    let pelerinsElus = [];
    let pelerinsRestants = [...pelerins];

    while(pelerinsElus.length< nombreAElire){
       
        // Randomly select a pilgrim from the remaining list
        const randomIndex = Math.floor(Math.random() * pelerinsRestants.length);
        console.log(randomIndex)
        if(pelerinsElus.length===nombreAElire-1){
            if(pelerinsRestants[randomIndex].genre==='ذكر'){
                pelerinsElus.push(pelerinsRestants[randomIndex])
                pelerinsRestants.splice(randomIndex, 1);
                break
            }else if (pelerinsRestants[randomIndex].genre==='أنثى'){
                let malePelerinIndex = pelerinsRestants.findIndex(pelerin => pelerin._id.toString() === pelerinsRestants[randomIndex].id_mahrem);
                if(malePelerinIndex===-1){
                    pelerinsElus.push(pelerinsRestants[randomIndex])
                    pelerinsRestants.splice(randomIndex, 1);
                    break
                }else 
              continue  
            }
        }
        let pelerinElu = pelerinsRestants[randomIndex];
       
        console.log('pelerin elu outside female',pelerinElu)
        pelerinsRestants.splice(randomIndex, 1); // Remove the selected pilgrim from the remaining list

        // Update the selected pilgrim's isSelected status
        if(pelerinElu.genre === 'ذكر'){
     
        pelerinsElus.push(pelerinElu);
    }


        // If the selected pilgrim is female and has a male reference, find the corresponding male pilgrim and update its isSelected status
        if (pelerinElu.genre === 'أنثى' && pelerinElu.id_mahrem) {
            let  pelerinF=pelerinElu
            console.log('female is ',pelerinF)
          
            console.log('index de mahrem ',malePelerinIndex)
            if (malePelerinIndex !== -1) {
                 pelerinElu = pelerinsRestants[malePelerinIndex];
                 pelerinsRestants.splice(malePelerinIndex , 1);
                 console.log("mahrem de " +pelerinF+" est : ",pelerinElu)
                
                 pelerinsElus.push(pelerinElu);
             
                 pelerinsElus.push(pelerinF);

             
            }else if(pelerinsElus.length<=nombreAElire -2){
               
                 pelerinsElus.push(pelerinElu);
            }
            
        }

      
        
    }
    console.log("lenght of the return",pelerinsElus.length)

    return {pelerinsElus,pelerinsRestants}
}

function setStatus(pelerins,status){

            for(let i=0;i<pelerins.length;i++){
                pelerins[i].status=status

            }
            return pelerins
}

// Controller method to elect pilgrims randomly and save them to the database
exports.electPilgrims = async (req, res) => {
    try {

        const{ nombreAElire ,nbraelireenattente}= req.body; // Extract the number of pilgrims to be elected from the request body
        const   pelerins = await Condidatures.find(); // Fetch all pilgrims from the database
        let  {pelerinsElus,pelerinsRestants}= await electionPelerinsAuHasard(pelerins,nombreAElire)
        console.log("pelerin elu ",pelerinsElus) 
        const pelerinfinal=setStatus(pelerinsElus,'is_elected')  
        
        
        let { pelerinsElus: pelerinsEnAttente, pelerinsRestants: pelerinsRestantsApresEnAttente } = await electionPelerinsAuHasard(pelerinsRestants, nbraelireenattente);
   
        console.log('Pèlerins en attente :', pelerinsEnAttente);
        const pelerinEnAttentFinale=setStatus(pelerinsEnAttente,'is_enAttent')




        res.json({ message:`pelerin elected : ${pelerinsElus}  le nbr elu ${pelerinsElus.length} ,pelerinListDattente ${pelerinsEnAttente}` });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};