const mongoose=require('mongoose')

const connection_string=process.env.DATABASE;
mongoose.connect(connection_string).then((res)=>{
    console.log("MongoDB successfully connected with DB: ",mongoose.connection.name)
}).catch((err)=>{
    console.log("MongoDB connection failed !!!")
    console.log(err)
})