const express = require('express')
const app = express()
const db = require('./db');
const Quality = require('./module/testing');
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// app.post('/quality', async (req, res) => {
//      const data = req.body;   // Assuming the request body contains the person data
    
//      // Create a new person document usiing the mongoose model
//      const newQuality = new Quality(data);
    
//      // Save the person document to the database
//       try {
//           const result = await newQuality.save();
//           console.log('Testing data saved successfully');
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

// // GET request to fetch all the person data
// app.get('/quality', async (req, res) => {
//     try {
//         const data = await Quality.find({});
//         res.send(data).status(200);
//     } catch (error) {
//         res.status(500).send(`Error fetching person data: ${error}`);
//     }
// });
 
const qualityRoutes = require('./routes/TestingRoutes');
app.use('/quality', qualityRoutes);

app.listen(3000, () => console.log('Server is running on port '));




