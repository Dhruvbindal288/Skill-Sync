const dotenv=require("dotenv")
const express=require("express")
dotenv.config()
const app=express()
const PORT=process.env.PORT
const connectDb=require('./src/lib/database_initiated.js')


app.use(express.json());









//SERVER STARTED
app.listen(PORT,()=>{
    console.log("App successfully running")
    connectDb()
});