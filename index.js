require('dotenv').config()

const express=require("express")
const cookpediaServer=express()
const cors=require('cors')
const router=require('./routes/router')

require('./config/connection')
//we have to inject cors
cookpediaServer.use(cors())

//use express.json to convert json to JS object
cookpediaServer.use(express.json())


//add routing
cookpediaServer.use(router)


const PORT=5000
cookpediaServer.listen(PORT,()=>{
    console.log(`cookpedia Server is running in PORT ${PORT}`)
})
cookpediaServer.get('/',(req,res)=>{
    res.status(200).send("Cookpedia server is running and waiting for requests!!!!!")
})