const express=require("express");
const fileUpload = require("express-fileupload");
const cors=require("cors");
const app =express();

//configuración de las peticiones cruzadas para el local host
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Cotrol-Allow-Headers','Content-Type, Origin, X-Requested-With, Accept');
    res.header('Access-Control-Allow-Headers', 'Content-Type','Authorization');
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header('Access-Control-Allow-Methods','Access-Control-Allow-Methods','GET, PATCH, PUT, POST, DELETE, OPTIONS');
  
    next();
    app.options('*',cors(),(req,res)=>{
        res.header('Access-Control-Allow-Methods','Access-Control-Allow-Methods','GET, PATCH, PUT, POST, DELETE, OPTIONS');
        req.header("Access-Control-Request-Headers", "true");
        res.header("Access-Control-Allow-Credentials", "true");
        res.send();   
    });

})


//configuración del servidor
app.use(express.urlencoded({extended:true}));
app.use(express.json())
app.use(fileUpload())
//app.use(express.static("files"));
app.use(express.static("public"));


const Router = require('./Router/Router');
Router(app);

const port =process.env.PORT || 3002;
app.listen(port,function(){   
    console.log("servidor en linea en el puerto: "+port );
})