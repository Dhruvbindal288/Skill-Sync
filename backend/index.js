const dotenv=require("dotenv")
const express=require("express")
dotenv.config()
const app=express()
const PORT=process.env.PORT
app.listen(PORT,()=>{
    console.log("App successfully running")
});