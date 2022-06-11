const connect =require("./connect/connectDb")
const express=require("express")
const app=express()
const person =require("./modal/person.modal")
const connectDB=require("./connect/connectDb")
require("dotenv").config()
app.use(express.json())
const port=process.env.PORT||8000
const personRouter=require("./routes/person.route")
app.use("/",personRouter)

connectDB()
console.log("--")
app.listen(port,(e)=>{

    if (e) throw e
    console.log("listen to port")
})


