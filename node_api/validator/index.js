const {check,validationResult} =  require('express-validator');

exports.createPostValidator = (req,res,next) => {
  //title
 // console.log(req.check)

    //  check('title', "write").notEmpty().run(req)
    //  check('title', "Title must be between 4 to 150 characters").isLength({
    //     min: 4,
    //     max:150
    // }).trim().;

    // //body
    //  check('body', "write").notEmpty()
    // check('body', "body must be between 4 to 150 characters").isLength({
    //     min: 4,
    //     max:150
    // });

   


    // //check for errors
    //  const errors =  req.validationResult(req)

    //  //if error show the first one as they happen 
    //  if(errors){
    //     const firstError =errors.map((error)=> error.msg)[0]
    //     return res.status(400).json({error: firstError})
    //  }

    //  // proceed to next middleware
    //  next();

    //check for errors

    const error =  validationResult(req);
    if(error.isEmpty()) return next();
    
  // const ferror =  result[0].msg;
    res.json({success:false, message:"failed"});
}


// exports.dataValidation = (req, res,next) => {
//     //check for errors
//     const result =  validationResult(req).array();

//     if(!result.length) return next();

//     const ferror =  result[0].msg;
//     res.json({success:false, message:ferror});

//     // //if error show the first one as they happen 
//     // if(errors){
//     //    const firstError =errors.map((error)=> error.msg)[0]
//     //    return res.status(400).json({error: firstError})
//     // }

//     // proceed to next middleware
//    // next();
// }