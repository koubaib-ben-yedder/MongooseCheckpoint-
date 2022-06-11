const mongoose=require("mongoose")

const connect=()=>{

    console.log("--")
    
    try {
        
        mongoose.connect(process.env.MONGO_URI)
        console.log("connect to mongooDb")
        
        
    } catch (error) {

        console.error(error)
        
    }


}

module.exports=connect