const mongoose = require('mongoose');

// const dbURI = 'mongodb+srv://netninja:test1234@cluster0.wojwcap.mongodb.net/registration-form?retryWrites=true&w=majority&appName=Cluster0';
const dbURI = 'mongodb+srv://chidiebere:test1234@cluster0.xpbsb.mongodb.net/'

async function connectToMongoDB() {
    try {
        await mongoose.connect(dbURI);
        console.log("Connected to MongoDB");
    } catch (err) {
        console.error("Error connecting to MongoDB:", err)
    }
}

    module.exports = connectToMongoDB;