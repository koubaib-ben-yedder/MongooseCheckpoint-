const mongoose=require("mongoose")

const personSchema=new mongoose.Schema({

    name:{type:String,require:true},

    age:{type:Number,require:true},

    favoriteFoods:{type:[String]}
})  

module.exports=mongoose.model("person",personSchema)