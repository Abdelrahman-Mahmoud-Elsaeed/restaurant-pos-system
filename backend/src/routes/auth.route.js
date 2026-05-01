// express >> router 
const express = require('express');
const router = express.Router();

// require controllers 
const { 
    loginController, 
    registerController, 
    moveToBin 
} = require("../controllers/auth.controller");

 router.post("/signup", registerController);
router.post("/login", loginController);

 router.patch("/delete-user/:id", moveToBin);

// export 
module.exports = router;