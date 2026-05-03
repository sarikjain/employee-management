const mongoose=require("mongoose")




async function connectdb(){

try{
   if( await mongoose.connect(process.env.mongodb)){
    console.log("Database has been created");}
}
catch(err){
    console.log(err)
}


}


module.exports=connectdb;



