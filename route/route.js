const express = require('express');
const router = express.Router();

const GetDetails = require('../controllers/registerController');

// dispaly details of card in success page
router.post('/register', GetDetails)

module.exports =  router;