const jwt=require('jsonwebtoken')

const jwtMiddleware=(req,res,next)=>{
    const token=req.headers["authorization"].split(' ')[1]
console.log(token)
    if(token){
        try {
          const jwtResponse=jwt.verify(token,process.env.JWT_PWD)  
          req.userId=jwtResponse.userId;
          next()
        } catch (error) {
            res.status(401).json("Authorization failed.  Please login!!!")
        }
    }
    else{
        res.status(401).json("Authorization failed, token missing!!!")
    }
}

module.exports=jwtMiddleware;