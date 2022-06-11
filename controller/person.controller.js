const person=require("../modal/person.modal")

exports.getPerson=async(req,res,next)=>{

    try {

        const persons=await person.find()

        next()

        return res.status(200).send(persons)
        
    } catch (error) {
        
        
        return res.status(500).send(error)
    }
}

exports.getOnePerson=async(req,res,next)=>{

    const {foodName}=req.params

    try {


        const personOne=await person.find()

       
        
        personOne.map((el)=>{


            if(el.favoriteFoods[0].includes(foodName)){

                console.log("--")
              
                return res.status(200).send({el})

                
            }

          

           
        })

        console.log(personOne)

        next()
     
            
        return res.status(400).send({msg:"person dont exist"})

    

        
    } catch (error) {

        return res.status(500).send(error)
        
    }
}

exports.getUserById=async(req,res,next)=>{

    const {id} =req.params


    try {

        const onePerson=await person.findById(id)


        next()

        if(onePerson){


            return  res.status(200).send({msg:"this person exist"})


        }

        return  res.status(400).send({msg:"this person doses not  exist"})

        
    } catch (error) {
        
      return   res.status(500).send(error)
    }
}

exports.addPerson=async(req,res,next)=>{


    try {

        person.create([
    
         req.body       
        ])
    
        person.save()
        console.log(req.body)
        next()
      


       return  res.status(200).send({msg:"person add with sucess"})
        
    } catch (error) {

       return  res.status(500).send(error)
        
    }
}

exports.update=async(req,res,next)=>{

    const {age,personName}=req.params



try {

    const data=await person.findOneAndUpdate({name:personName},{$set:{age:age}},{new:true})


    next()

    if(data){

        return res.status(200).send(data)


    }

    return res.status(400).send({msg:"person doses not exist"})


    
} catch (error) {

    return res.status(500).send(error)
    
}

}

exports.deleat=async(req,res,next)=>{

    const {id}=req.params

    console.log(id)

    try {

        const data=await person.findByIdAndRemove(id)

        next()

        return res.status(200).send({msg:"person removed"})
        
    } catch (error) {


        return res.status(500).send(error)
        
    }
}

exports.removePerson=async(req,res,next)=>{

    const {nameOfPersonToDelete}=req.params

    console.log(nameOfPersonToDelete)

    try {

        const personDeleted=await person.remove({name:nameOfPersonToDelete})

        next()

        return res.status(200).send(personDeleted)
        
    } catch (error) {

        return res.status(500).send(error)
        
    }


}

exports.chain=async(req,res,next)=>{


    try {

       const data= await person.find().sort().limit(2).select({age:-1}).exec()

       if(data){

           return  res.status(200).send({msg:data})

       }

       return res.status(400).send({msg:"person not found"})




        
    } catch (error) {

        return res.status(500).send(error)
        
    }


}