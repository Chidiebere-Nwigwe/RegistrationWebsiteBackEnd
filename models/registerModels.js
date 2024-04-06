const mongoose = require ('mongoose');
const Schema  = mongoose.Schema;

const registerSchema = new Schema({
    studentNumber: {
        type: String,
        required: true
    },
    fullName: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    }
    ,
    status: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});


const Register = mongoose.model('Register', registerSchema);
module.exports = Register;