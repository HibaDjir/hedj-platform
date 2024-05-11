
const Condidatures=require('../../models/Candidature')

const Commune =require('../../models/Commune')
const {setStatus} = require('./clcPrctg');
const pelerin = require('../../models/pelerin');
const { all } = require('../../routes/pelerinRoute');

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
            let malePelerinIndex = pelerinsRestants.findIndex(pelerin => pelerin._id.toString() === pelerinElu.id_mahrem);
            console.log('index de mahrem ',malePelerinIndex)
            //les cas ou le mahrem existe dans restants
            if (malePelerinIndex !== -1) {
                 pelerinElu = pelerinsRestants[malePelerinIndex];
                 pelerinsRestants.splice(malePelerinIndex , 1);
                 console.log("mahrem de " +pelerinF+" est : ",pelerinElu)
                
                 pelerinsElus.push(pelerinElu);

                 pelerinsElus.push(pelerinF);


                         //les cas ou le mahrem nexiste pas dans restants et existe plus de places'we didnt reach last place=
            }else if(pelerinsElus.length<=nombreAElire -2){
               
                 pelerinsElus.push(pelerinElu);
            }
            
        }

      
        
    }
    console.log("lenght of the return",pelerinsElus.length)

    return {pelerinsElus,pelerinsRestants}
}



// Controller method to elect pilgrims randomly and save them to the database
exports.electPilgrims = async (req, res) => {
    try {

        const{ nombreAElire ,nbraelireenattente}= req.body; // Extract the number of pilgrims to be elected from the request body
        const   pelerins = await Condidatures.find(); // Fetch all pilgrims from the database
        let  {pelerinsElus,pelerinsRestants}= await electionPelerinsAuHasard(pelerins,nombreAElire)
        console.log("pelerin elu ",pelerinsElus) 
     let candi=   await Condidatures.updateMany(
            { _id: { $in: pelerinsElus.map(pelerin => pelerin._id) } }, // Find candidatures associated with the updated pelerins
            { $set: { status: "is_elected" } } // Update their status to "is-elected"
          );

        const pelerinfinal=setStatus(pelerinsElus,'is_elected')          
        
        let { pelerinsElus: pelerinsEnAttente, pelerinsRestants: pelerinsRestantsApresEnAttente } = await electionPelerinsAuHasard(pelerinsRestants, nbraelireenattente);
   
        console.log('Pèlerins en attente :', pelerinsEnAttente);
        const pelerinEnAttentFinale=setStatus(pelerinsEnAttente,'is_enAttent')       
        let allPelerins = [...pelerinfinal, ...pelerinEnAttentFinale]
        console.log("TOUSSSSSS LES PELERINS", allPelerins)
     
        for (let  pelerinData of allPelerins) {
            try {
                // Create a new Pelerin document
                const newPelerin = await pelerin.create({ Candidature: pelerinData._id });
                console.log('New pelerin created:', newPelerin);
            } catch (error) {
                console.error('Error creating pelerin:', error);
            }
        }

        res.json(allPelerins);
      

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};