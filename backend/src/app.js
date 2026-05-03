const express=require("express")
const app=express();
const router=require("./routes/auth.route")
const cookiparser=require("cookie-parser")




app.use(express.json())
app.use(cookiparser())
app.use("/api/auth",router)



module.exports=app;