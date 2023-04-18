const Preciocliente = require('../Model/M_Cliente');

exports.Create=async(req,res)=>{
    try {
        const preciocliente=await Preciocliente.Create(new Preciocliente(req.body));
        console.log(preciocliente)
        res.status(200).send({res:"ingresado corectamento"});
    } catch (er) {
        console.log(er)
        res.status(503).send({res: "No se puedo ingresar, erorr"})
        console.log(`Error:  ${er.sqlMessage}. \n SQL: ${er.sql}`);
    }
}
exports.Update=async(req,res)=>{
    try {
        const preciocliente=await Preciocliente.Update(new Preciocliente(req.body));
        console.log(preciocliente)
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
        const preciocliente=await Preciocliente.Delete(req.params.id);
        console.log(preciocliente)
        res.status(200).send({res:"Eliminado Correctamente"});
    } catch (er) {
        console.log(er)
        res.status(503).send({res: "No se puedo eliminar, erorr"})
        console.log(`Error:  ${er.sqlMessage}. \n SQL: ${er.sql}`);
    }
}
   
exports.ViewOne=async(req,res)=>{
    try {
        const preciocliente=await Preciocliente.ViewOne(req.params.id);
        console.log(preciocliente);
        if(preciocliente !== null){
            res.send({res:preciocliente})
            return
        }
        if(typeof preciocliente === 'undefined' ){
            res.status(503).send({res:"Algo salio mal: error interno en la base de datos"});
            return
        }
       res.status(404).send({res:"No encontro informacion del preciocliente"});
    } catch (er) {
        res.status(503).send({res:"Algo salio mal: error interno en la base de datos"});
        console.log(`Error:  ${er.sqlMessage}. \n SQL: ${er.sql}`);
    }
    }
    
exports.View=async(req,res)=>{
try {
    const preciocliente=await Preciocliente.View();
    console.log(preciocliente);
    if(preciocliente !== null){
        res.send({res:preciocliente})
        return
    }
    if(typeof preciocliente === 'undefined' ){
        res.status(503).send({res:"Algo salio mal: error interno en la base de datos"});
        return
    }
   res.status(404).send({res:"No encontro informacion del preciocliente"});
} catch (er) {
    res.status(503).send({res:"Algo salio mal: error interno en la base de datos"});
    console.log(`Error:  ${er.sqlMessage}. \n SQL: ${er.sql}`);
}
}
