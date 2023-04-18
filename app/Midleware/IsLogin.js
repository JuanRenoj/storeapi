const jwt=require("jsonwebtoken");

function IsLogin(req,res,next){
const bearerHeader =req.header("authorization");
if(typeof bearerHeader !== 'undefined'){
  //  console.log(bearerHeader)
    const bearerToken =bearerHeader.split(" ")[1];
    try{
      jwt.verify(bearerToken,"secretKey");
        next();
    }catch(e){
        res.status(403).send({error:"No tienes autorización para hacer uso de esta api rest"});
    }
    return
}
res.status(403).send({error:"Necesitas un token de autorizacion para uso de esta api rest"});
}
/*
const IsLogin=(req, res, next) =>{
    const bearerHeader=req.header("Authorization");
    if(typeof bearerHeader !== "undefined"){
        const bearerToken = bearerHeader.split(" ")[1];
      
        jwt.verify(bearerToken,"secretKey",(error,authData)=>{
            if(error){
                console.log(error)
                res.status(403).json({error:"No tienes autorizacion para realizar esta acción"});
            }else{
                next();
            }
        });
    }else{
        res.status(403).json({error:"Necesita usar un token de autorizacioón"});
    }
    }*/

module.exports=IsLogin;