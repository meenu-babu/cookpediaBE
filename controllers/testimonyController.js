const testimonials=require('../models/testimonyModel')

//add testimony
exports.addTestimonyController=async(req,res)=>{
    console.log("Inside addTestimony Controller")
    const {name,email,message}=req.body;
    console.log(name,email,message)
    try{
const newTestimony=new testimonials({
    name,email,message
})
await newTestimony.save();
res.status(201).json(newTestimony)
    }
    catch(err)
    {
        res.status(401).json(err)
    }
    
}