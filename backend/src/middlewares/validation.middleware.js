const { validationResult } = require("express-validator")



async function validationmiddleware(req,res,next){


    try{
        const errors=validationResult(req)
        if(errors.isEmpty()){
            next();
        }
    }
    catch(err){
        console.log(err.message)
    }












}
module.exports=validationmiddleware;