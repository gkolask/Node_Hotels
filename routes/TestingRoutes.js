const express = require('express');
const router = express.Router();
const Testing = require('../module/testing');


router.post('/', async (req, res) => {
    const data = req.body;   // Assuming the request body contains the person data
   
    // Create a new person document usiing the mongoose model
    const newQuality = new Testing(data);
   
    // Save the person document to the database
     try {
         const result = await newQuality.save();
         console.log('Testing data saved successfully');
         res.status(201).send(result);
     } catch (error) {
         res
         .status(500)
         .send(`Error saving the person to the database: ${error}`);
     }
});



// router.get('/', function (req, res) {
//  res.send('Hello World')
// })

// GET request to fetch all the person data
router.get('/', async (req, res) => {
   try {
       const data = await Testing.find({});
       res.send(data).status(200);
   } catch (error) {
       res.status(500).send(`Error fetching person data: ${error}`);
   }
});

router.get('/:workType', async (req, res) => {
    try {
         const workType = req.params.workType;
         if(workType === 'hr' || workType === 'teamLead' || workType === 'manager') {
             const response = await Testing.find({work: workType});
             console.log('response fetched');
             res.status(200).json(response);
         }
         else {
             res.status(400).send(`Invalid work type: ${workType}`);
         }
     } catch (error) {
         res.status(500).json({error: `Error fetching person data: ${error}`});
     }
  }
  );

module.exports = router;



