const Detallefactura = require('../Model/M_Detallefactura');

exports.Create=async(req,res)=>{
    try {
        const detallefactura=await Detallefactura.Create(new Detallefactura(req.body));
        console.log(detallefactura)
        res.status(200).send({res:"ingresado corectamento"});
    } catch (er) {
        console.log(er)
        res.status(503).send({res: "No se puedo ingresar, erorr"})
        console.log(`Error:  ${er.sqlMessage}. \n SQL: ${er.sql}`);
    }
}
exports.Update=async(req,res)=>{
    try {
        const detallefactura=await Detallefactura.Update(new Detallefactura(req.body));
        console.log(detallefactura)
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
        const detallefactura=await Detallefactura.Delete(req.params.id);
        console.log(detallefactura)
        res.status(200).send({res:"Eliminado Correctamente"});
    } catch (er) {
        console.log(er)
        res.status(503).send({res: "No se puedo eliminar, erorr"})
        console.log(`Error:  ${er.sqlMessage}. \n SQL: ${er.sql}`);
    }
}
   
exports.ViewOne=async(req,res)=>{
    try {
        const detallefactura=await Detallefactura.ViewOne(req.params.id);
        console.log(detallefactura);
        if(detallefactura !== null){
            res.send({res:detallefactura})
            return
        }
        if(typeof detallefactura === 'undefined' ){
            res.status(503).send({res:"Algo salio mal: error interno en la base de datos"});
            return
        }
       res.status(404).send({res:"No encontro informacion del detallefactura"});
    } catch (er) {
        res.status(503).send({res:"Algo salio mal: error interno en la base de datos"});
        console.log(`Error:  ${er.sqlMessage}. \n SQL: ${er.sql}`);
    }
    }
    
exports.View=async(req,res)=>{
try {
    const detallefactura=await Detallefactura.View();
    console.log(detallefactura);
    if(detallefactura !== null){
        res.send({res:detallefactura})
        return
    }
    if(typeof detallefactura === 'undefined' ){
        res.status(503).send({res:"Algo salio mal: error interno en la base de datos"});
        return
    }
   res.status(404).send({res:"No encontro informacion del detallefactura"});
} catch (er) {
    res.status(503).send({res:"Algo salio mal: error interno en la base de datos"});
    console.log(`Error:  ${er.sqlMessage}. \n SQL: ${er.sql}`);
}
}

   
exports.Viewxd=async(req,res)=>{
    try {
        const detallefactura=await Detallefactura.Viewxd(req.params.id);
        console.log(detallefactura);
        if(detallefactura !== null){
            res.send({res:detallefactura[0]})
            return
        }
        if(typeof detallefactura === 'undefined' ){
            res.status(503).send({res:"Algo salio mal: error interno en la base de datos"});
            return
        }
       res.status(404).send({res:"No encontro informacion del detallefactura"});
    } catch (er) {
        res.status(503).send({res:"Algo salio mal: error interno en la base de datos"});
        console.log(`Error:  ${er.sqlMessage}. \n SQL: ${er.sql}`);
    }
    }
    