// create express server
const express = require("express");
const {check,validationResult} =  require('express-validator');
const postcontroller = require("../controllers/post");

const validator = require("../validator")

// express route method

const router = express.Router();

router.get("/", postcontroller.getposts);


router.post("/post",
[check('title').isLength({min:3, max: 20}).withMessage('title must be within 3 to 20 characters'),
check('body').isLength({min:3, max: 20}).withMessage('body must be within 3 to 20 characters')],
postcontroller.createpost);



//router.post("/post", postcontroller.createpost);


module.exports = router;