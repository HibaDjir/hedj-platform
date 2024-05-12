const router = require('express').Router();
const multer = require('multer');
const {
    createCandidature,
    getAllCandidature,
    getFirstCandidature,
    getCandidature,
    getCandidatureUser,
    getCandidatureUserMale,
    deleteCandidature,
    updateCandidature,
    getCandByWilaya,
    deleteCands,
    getCandidatureCodeWilaya,
    getCandidatureCodeWilayaPrise,
    getCandidatureCodeWilayaAttente,
    getAllCandidatureAff

} = require('../controllers/CandidatureControllers')

const candidat = require('../models/Candidature');

router.get('/', getAllCandidature)
router.get('/Aff', getAllCandidatureAff)

router.get('/:name', getCandByWilaya) //////nommer les route 

router.get('/:id', getFirstCandidature)

router.get('/genre/find', getCandidature)

router.get('/wilaya/find', getCandidatureCodeWilaya)

router.get('/wilaya/prise/find', getCandidatureCodeWilayaPrise)

router.get('/wilaya/attente/find', getCandidatureCodeWilayaAttente)

router.get('/genreMale/find', getCandidatureUserMale)

router.get('/id_user/find', getCandidatureUser)

router.post('/', createCandidature)

router.delete('/:id', deleteCandidature)

router.patch('/:id', updateCandidature)


router.delete('/', deleteCands )



const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Specify the destination folder for uploaded files
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Use the original filename for storing the file
  }
});

const upload = multer({ storage: storage });

router.post('/upload', upload.single('file'), async (req, res) => {
  
  try {
    // Define the criteria for identifying the documents to update
    const { file, idCandidat } = req.body;
    const criteria = { '_id': idCandidat };

    const update = {
        $set: {
            file_medical: `uploads/${file}`
        }
    };

    const result = await candidat.updateOne(criteria, update, {upsert: true});

    return res.status(200).json({ message: `${result.nModified} records updated successfully` });
  } catch (error) {
      console.error('Error:', error);
      return res.status(500).json({ message: 'Internal server error' });
  }
    /*try {
        const { file } = "dzdzd";
        const { id } = req.body;
        
        // Update the file path or URL in the database
        await candidat.findByIdAndUpdate(id, { file_medical: `uploads/${file}` }, {upsert: true});
        
        res.send('File uploaded and field updated successfully');
    } catch (error) {
      console.error('Error uploading file:', error);
      res.status(500).send('Internal server error');
    }*/
  });

  router.post('/uploadVersement', upload.single('file'), async (req, res) => {
    
    try {
      const {file_paie_ver, num_compte, cle_compte, num_rib, propreitaire_compte, address_op, date_operation, idCandidat} = req.body;
      const criteria = { '_id': idCandidat };
      const update = {
          $set: {
              file_paie_ver: `uploads/${file_paie_ver}`,
              num_compte: num_compte,
              cle_compte: cle_compte,
              num_rib: num_rib,
              propreitaire_compte: propreitaire_compte,
              address_op: address_op,
              date_operation: date_operation,
          }
      };
  
      // Update the documents that match the criteria
      const result = await candidat.updateOne(criteria, update, {upsert: true});
  
      return res.status(200).json({ message: `${result.nModified} records updated successfully` });
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
    });

  router.put('/AddPaieCarte', upload.single('file'), async (req, res) => {
    
    try {
      const { propreitaire_carte, code_carte, num_carte, date_exp_carte, idCandidat } = req.body;
      const criteria = { '_id': idCandidat };
      const update = {
          $set: {
            propreitaire_carte: propreitaire_carte,
            code_carte: code_carte,
            num_carte: num_carte,
            date_exp_carte: date_exp_carte
          }
      };
  
      // Update the documents that match the criteria
      const result = await candidat.updateOne(criteria, update, {upsert: true});
  
      return res.status(200).json({ message: `${result.nModified} records updated successfully` });
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
    });

module.exports=router;



