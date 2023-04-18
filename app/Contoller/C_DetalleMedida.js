const DetalleMedida = require('../Model/M_DetalleMedida');

exports.Create=async(req,res)=>{
    try {
        const detallemedida=await DetalleMedida.Create(new DetalleMedida(req.body));
        console.log(detallemedida)
        res.status(200).send({res:"ingresado corectamento"});
    } catch (er) {
        console.log(er)
        res.status(503).send({res: "No se puedo ingresar, erorr"})
        console.log(`Error:  ${er.sqlMessage}. \n SQL: ${er.sql}`);
    }
}
exports.Update=async(req,res)=>{
    try {
        const detallemedida=await DetalleMedida.Update(new DetalleMedida(req.body));
        console.log(detallemedida)
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
        const detallemedida=await DetalleMedida.Delete(req.params.id);
        console.log(detallemedida)
        res.status(200).send({res:"Eliminado Correctamente"});
    } catch (er) {
        console.log(er)
        res.status(503).send({res: "No se puedo eliminar, erorr"})
        console.log(`Error:  ${er.sqlMessage}. \n SQL: ${er.sql}`);
    }
}
   
exports.ViewOne=async(req,res)=>{
    try {
        const detallemedida=await DetalleMedida.ViewOne(req.params.id);
        console.log(detallemedida);
        if(detallemedida !== null){
            res.send({res:detallemedida})
            return
        }
        if(typeof detallemedida === 'undefined' ){
            res.status(503).send({res:"Algo salio mal: error interno en la base de datos"});
            return
        }
       res.status(404).send({res:"No encontro informacion del detallemedida"});
    } catch (er) {
        res.status(503).send({res:"Algo salio mal: error interno en la base de datos"});
        console.log(`Error:  ${er.sqlMessage}. \n SQL: ${er.sql}`);
    }
    }
    
exports.View=async(req,res)=>{
try {
    const detallemedida=await DetalleMedida.View();
    console.log(detallemedida);
    if(detallemedida !== null){
        res.send({res:detallemedida})
        return
    }
    if(typeof detallemedida === 'undefined' ){
        res.status(503).send({res:"Algo salio mal: error interno en la base de datos"});
        return
    }
   res.status(404).send({res:"No encontro informacion del detallemedida"});
} catch (er) {
    res.status(503).send({res:"Algo salio mal: error interno en la base de datos"});
    console.log(`Error:  ${er.sqlMessage}. \n SQL: ${er.sql}`);
}
}
exports.Viewxd=async(req,res)=>{
    try {
        const detallemedida=await DetalleMedida.Viewxd(req.params.id);
        console.log(detallemedida);
        if(detallemedida !== null){
            res.send({res:detallemedida[0]})
            return
        }
        if(typeof detallemedida === 'undefined' ){
            res.status(503).send({res:"Algo salio mal: error interno en la base de datos"});
            return
        }
       res.status(404).send({res:"No encontro informacion del detalle medida"});
    } catch (er) {
        res.status(503).send({res:"Algo salio mal: error interno en la base de datos"});
        console.log(`Error:  ${er.sqlMessage}. \n SQL: ${er.sql}`);
    }
    }