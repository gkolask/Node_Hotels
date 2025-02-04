const mongoose = require('mongoose');
require('dotenv').config();

//database url
//const databaseUrl = process.env.MONGODB_URL_LOCAL;

const databaseUrl = process.env.DB_URL_SERVER;

//set up connection
mongoose.connect(databaseUrl,
     { useNewUrlParser: true,
        useUnifiedTopology: true });

//check if connection is successful
// mongoose maintain a default connection object representing the mongodb connection
const db = mongoose.connection;

// define an event listener for the connection
// event listener is a function that will be invoked when a particular event is emitted

db.on('connected', () => {
    console.log(`Connected to the mongo database server`);
});

db.on('error', (error) => {
    console.log(`Error connecting to the database: ${error}`);
}
);

db.on('disconnected', () => {
    console.log(`Disconnected from the mongo database server`);
}
);

// export the connection object
module.exports = db;