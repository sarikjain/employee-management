require("dotenv").config()
const app=require("./src/app")
const connectdb = require("./src/db")


connectdb();





app.listen(3000,()=>{
    console.log("Server has been initialized")
})