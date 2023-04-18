const Ubicacion = require('../Model/M_Ubicacion');

exports.Create=async(req,res)=>{
    try {
        const ubicacion=await Ubicacion.Create(new Ubicacion(req.body));
        console.log(ubicacion)
        res.status(200).send({res:"ingresado corectamento"});
    } catch (er) {
        console.log(er)
        res.status(503).send({res: "No se puedo ingresar, erorr"})
        console.log(`Error:  ${er.sqlMessage}. \n SQL: ${er.sql}`);
    }
}
exports.Update=async(req,res)=>{
    try {
        const ubicacion=await Ubicacion.Update(new Ubicacion(req.body));
        console.log(ubicacion)
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
        const ubicacion=await Ubicacion.Delete(req.params.id);
        console.log(ubicacion)
        res.status(200).send({res:"Eliminado Correctamente"});
    } catch (er) {
        console.log(er)
        res.status(503).send({res: "No se puedo eliminar, erorr"})
        console.log(`Error:  ${er.sqlMessage}. \n SQL: ${er.sql}`);
    }
}
   
exports.ViewOne=async(req,res)=>{
    try {
        const ubicacion=await Ubicacion.ViewOne(req.params.id);
        console.log(ubicacion);
        if(ubicacion !== null){
            res.send({res:ubicacion})
            return
        }
        if(typeof ubicacion === 'undefined' ){
            res.status(503).send({res:"Algo salio mal: error interno en la base de datos"});
            return
        }
       res.status(404).send({res:"No encontro informacion del ubicacion"});
    } catch (er) {
        res.status(503).send({res:"Algo salio mal: error interno en la base de datos"});
        console.log(`Error:  ${er.sqlMessage}. \n SQL: ${er.sql}`);
    }
    }
    
exports.View=async(req,res)=>{
try {
    const ubicacion=await Ubicacion.View();
    console.log(ubicacion);
    if(ubicacion !== null){
        res.send({res:ubicacion})
        return
    }
    if(typeof ubicacion === 'undefined' ){
        res.status(503).send({res:"Algo salio mal: error interno en la base de datos"});
        return
    }
   res.status(404).send({res:"No encontro informacion del ubicacion"});
} catch (er) {
    res.status(503).send({res:"Algo salio mal: error interno en la base de datos"});
    console.log(`Error:  ${er.sqlMessage}. \n SQL: ${er.sql}`);
}
}
