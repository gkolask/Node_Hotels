const express = require('express');
const router = express.Router();
const Person = require('../module/person');

router.post('/', async (req, res) => {
    const data = req.body;   // Assuming the request body contains the person data
   
    // Create a new person document usiing the mongoose model
    const newPerson = new Person(data);
   
    // Save the person document to the database
     try {
         const result = await newPerson.save();
         console.log('Person data saved successfully');
         res.status(201).send(result);
     } catch (error) {
         res
         .status(500)
         .send(`Error saving the person to the database: ${error}`);
     }
});





// GET request to fetch all the person data
router.get('/', async (req, res) => {
   try {
       const data = await Person.find({});
       res.send(data).status(200);
   } catch (error) {
       res.status(500).send(`Error fetching person data: ${error}`);
   }
});


router.get('/:workType', async (req, res) => {
  try {
       const workType = req.params.workType;
       if(workType === 'chef' || workType === 'waiter' || workType === 'manager') {
           const response = await Person.find({work: workType});
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

router.put('/:id', async (req, res) => {
    try {
        const personId = req.params.id;
        const updateData = req.body;

        const response = await Person.findByIdAndUpdate(personId, updateData, 
            {new: true,
                runValidators: true
            })
            
        if(!response) {
              return res.status(404).json(`Person with id ${personId} not found`);
        }
        console.log('response updated');
        res.status(200).json(response);
    } catch (error) {
        console.log('error');
        res.status(500).json({error: `Error updating person data: ${error}`});
    }
}
);

router.delete('/:id', async (req, res) => {
    try {
        const personId = req.params.id;
        const response = await Person.findByIdAndDelete(personId);
        if(!response) {
            return res.status(404).json(`Person with id ${personId} not found`);
        }
        console.log('response deleted');
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({error: `Error deleting person data: ${error}`});
    }
}
);


module.exports = router;
