
const Register = require("../models/registerModels");

const GetDetails = (req, res) =>{
    const { studentNumber, fullName, address, status } = req.body;
    const register = new Register({
        studentNumber: studentNumber,
        fullName: fullName,
        address: address,
        status: status
    });
    
    register.save()
        .then(() => {
            // Redirect with data as URL parameters
            // res.redirect(`http://127.0.0.1:5500/success/index.html?studentNumber=${studentNumber}&fullName=${fullName}&address=${address}&status=${status}`);
            res.redirect(`https://chidiebere-nwigwe.github.io/success/index.html?studentNumber=${studentNumber}&fullName=${fullName}&address=${address}&status=${status}`)
        })
        .catch((err) => {
            console.log(err);
        });
}
module.exports = GetDetails