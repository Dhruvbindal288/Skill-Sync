const dotenv=require("dotenv")
const express=require("express")
dotenv.config()
const app=express()
const PORT=process.env.PORT
const connectDb=require('./src/lib/database_initiated.js')
const path=require('path')

app.use(express.json());
app.use('/assets', express.static(__dirname,'/assets'))








//SERVER STARTED
app.listen(PORT,()=>{
    console.log("App successfully running")
    connectDb()
});