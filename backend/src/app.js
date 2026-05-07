const express=require("express")
const app=express();
const router=require("./routes/auth.route")
const cookiparser=require("cookie-parser")
const cors=require("cors")



app.use(express.json())
app.use(cookiparser())

app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true,
    })
);
app.use("/api/auth",router)

module.exports=app;