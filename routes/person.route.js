const personRouter=require("express").Router()
const {getPerson,getOnePerson,getUserById,addPerson,update,deleat,removePerson,chain}=require("../controller/person.controller")

personRouter.get("/getPerson",getPerson)
personRouter.get("/getOnePerson/:foodName",getOnePerson)
personRouter.get("/getUserById/:id",getUserById)
personRouter.post("/addPerson",addPerson)
personRouter.put("/update/:personName/:age",update)
personRouter.delete("/delete/:id",deleat)
personRouter.delete("/remove/:nameOfPersonToDelete",removePerson)
personRouter.get("/chain",chain)

module.exports=personRouter