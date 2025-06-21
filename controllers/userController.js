const users=require('../models/userModel')
const bcrypt = require('bcrypt');


// add user
exports.addUserController=async(req,res)=>{
    console.log("Inside userController")

    const {username,email,password}=req.body;
    console.log(username,email,password)

    const encryptedPwd=await bcrypt.hash(password,10);
    console.log(encryptedPwd)
    try {
        const existingUser=await users.findOne({email:email})
        if(existingUser){
            res.status(406).json("user already exist")
        }
        else{
            const newUser=new users({
                username:username,
                email:email,
                password:encryptedPwd,
                profilePic:''
            })
            await newUser.save()
            res.status(201).json("User registered successfully!!")
        }
    } catch (error) {
        res.status(401).json(error)
    }

}