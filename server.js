const express = require('express')
const app = express()
const db = require('./db');
const Person = require('./module/person');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
require('dotenv').config();

// app.post('/person', async (req, res) => {
//      const data = req.body;   // Assuming the request body contains the person data
    
//      // Create a new person document usiing the mongoose model
//      const newPerson = new Person(data);
    
//      // Save the person document to the database
//       try {
//           const result = await newPerson.save();
//           console.log('Person data saved successfully');
//           res.status(201).send(result);
//       } catch (error) {
//           res
//           .status(500)
//           .send(`Error saving the person to the database: ${error}`);
//       }
// });



// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

// GET request to fetch all the person data
// app.get('/person', async (req, res) => {
//     try {
//         const data = await Person.find({});
//         res.send(data).status(200);
//     } catch (error) {
//         res.status(500).send(`Error fetching person data: ${error}`);
//     }
// });


// app.get('/person/:workType', async (req, res) => {
//    try {
//         const workType = req.params.workType;
//         if(workType === 'chef' || workType === 'waiter' || workType === 'manager') {
//             const response = await Person.find({work: workType});
//             console.log('response fetched');
//             res.status(200).json(response);
//         }
//         else {
//             res.status(400).send(`Invalid work type: ${workType}`);
//         }
//     } catch (error) {
//         res.status(500).json({error: `Error fetching person data: ${error}`});
//     }
// }
// );

const PORT= process.env.PORT || 3000;

const personRoutes = require('./routes/personRoutes');
app.use('/person', personRoutes);




app.listen(PORT, () => console.log('Server is running on port '));




