
//express >>router 

const express = require('express');
const router = express.Router();

// require controllers 

const{loginController,registerController} = require("../controllers/auth.controller")

// routers auth >> login , signup 
router.post("signup",registerController);
router.post("login" , loginController);
npm,
// export 
module.exports = router