const mongoose=require("mongoose")



const employeeschema=new mongoose.Schema({

    username:{
        type:String,
        required:true,
        unique:true
    },
    salary:{
type:Number,
required:true
    },
    age:{
        type:Number,
        required:true
    }
,
email:{
    type:String,
    required:true
},
password:{
     type:String,
    required:true
},
workathome:{
    type:Boolean,
    required:true
},
location:{
    type:String,
    required:true
},
attendance:{
    type:Number,
    required:true
}
})



const employeemodel=new mongoose.model("employee",employeeschema);
module.exports=employeemodel;