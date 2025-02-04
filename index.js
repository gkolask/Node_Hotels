const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/idli', function (req, res) {
    res.send('i want to eat idli')
  })

  app.post('/', function (req, res) {
    res.send('data send over server')
  })
app.listen(3000, () => console.log('Server is running on port '));




