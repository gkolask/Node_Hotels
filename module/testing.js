const mongoose = require('mongoose');

// Define the person schema
const TestingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
    },
    work: {
        type: String,
        enum: ['senier','teamLead','manager']
    },
    mobile: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String,
    },
    salary: {
        type: Number,
    }
});

// Create a model from the schema
const Testing = mongoose.model('test', TestingSchema);

module.exports = Testing;