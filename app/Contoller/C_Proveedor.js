const Proveedor = require('../Model/M_Proveedor');

exports.Create=async(req,res)=>{
    try {
        const proveedor=await Proveedor.Create(new Proveedor(req.body));
        console.log(proveedor)
        res.status(200).send({res:"ingresado corectamento"});
    } catch (er) {
        console.log(er)
        res.status(503).send({res: "No se puedo ingresar, erorr"})
        console.log(`Error:  ${er.sqlMessage}. \n SQL: ${er.sql}`);
    }
}
exports.Update=async(req,res)=>{
    try {
        const proveedor=await Proveedor.Update(new Proveedor(req.body));
        console.log(proveedor)
        res.status(200).send({res:"ingresado corectamento"});
    } catch (er) {
        console.log(er)
        res.status(503).send({res: "No se puedo ingresar, erorr"})
        console.log(`Error:  ${er.sqlMessage}. \n SQL: ${er.sql}`);
    }
}
exports.Delete=async(req,res)=>{
    try {
        console.log(req.params.id)
        const proveedor=await Proveedor.Delete(req.params.id);
        console.log(proveedor)
        res.status(200).send({res:"Eliminado Correctamente"});
    } catch (er) {
        console.log(er)
        res.status(503).send({res: "No se puedo eliminar, erorr"})
        console.log(`Error:  ${er.sqlMessage}. \n SQL: ${er.sql}`);
    }
}
   
exports.ViewOne=async(req,res)=>{
    try {
        const proveedor=await Proveedor.ViewOne(req.params.id);
        console.log(proveedor);
        if(proveedor !== null){
            res.send({res:proveedor})
            return
        }
        if(typeof proveedor === 'undefined' ){
            res.status(503).send({res:"Algo salio mal: error interno en la base de datos"});
            return
        }
       res.status(404).send({res:"No encontro informacion del proveedor"});
    } catch (er) {
        res.status(503).send({res:"Algo salio mal: error interno en la base de datos"});
        console.log(`Error:  ${er.sqlMessage}. \n SQL: ${er.sql}`);
    }
    }
    
exports.View=async(req,res)=>{
try {
    const proveedor=await Proveedor.View();
    console.log(proveedor);
    if(proveedor !== null){
        res.send({res:proveedor})
        return
    }
    if(typeof proveedor === 'undefined' ){
        res.status(503).send({res:"Algo salio mal: error interno en la base de datos"});
        return
    }
   res.status(404).send({res:"No encontro informacion del proveedor"});
} catch (er) {
    res.status(503).send({res:"Algo salio mal: error interno en la base de datos"});
    console.log(`Error:  ${er.sqlMessage}. \n SQL: ${er.sql}`);
}
}

/*const mproveedor=new MProveedor();
class CProveedor{

constructor (){}

   async View(req,res){
try {
    const  proveedor=await mproveedor.Create(new MProveedor(req.body.idproveedor, req.body.nombre))
   console.log(proveedor)
    if(proveedor !== null ){
        res.send({res:proveedor})
        return
    }
    res.status(404).send({res:"No se encontro registro de proveedor"});
} catch (er) {
    res.status(503).send({res:"Algo salio mal, error interno de la base de datos"})
    console.log(`Error ${er.sqlMessage}. \n Sql ${er.sql}`);
}
   }
}
module.exports=CProveedor;*/