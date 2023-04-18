const Stock = require('../Model/M_Stock');

exports.Create=async(req,res)=>{
    try {
        const stock=await Stock.Create(new Stock(req.body));
        console.log(stock)
        res.status(200).send({res:"ingresado corectamento"});
    } catch (er) {
        console.log(er)
        res.status(503).send({res: "No se puedo ingresar, erorr"})
        console.log(`Error:  ${er.sqlMessage}. \n SQL: ${er.sql}`);
    }
}
exports.Update=async(req,res)=>{
    try {
        const stock=await Stock.Update(new Stock(req.body));
        console.log(stock)
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
        const stock=await Stock.Delete(req.params.id);
        console.log(stock)
        res.status(200).send({res:"Eliminado Correctamente"});
    } catch (er) {
        console.log(er)
        res.status(503).send({res: "No se puedo eliminar, erorr"})
        console.log(`Error:  ${er.sqlMessage}. \n SQL: ${er.sql}`);
    }
}
   
exports.ViewOne=async(req,res)=>{
    try {
        const stock=await Stock.ViewOne(req.params.id);
        console.log(stock);
        if(stock !== null){
            res.send({res:stock})
            return
        }
        if(typeof stock === 'undefined' ){
            res.status(503).send({res:"Algo salio mal: error interno en la base de datos"});
            return
        }
       res.status(404).send({res:"No encontro informacion del stock"});
    } catch (er) {
        res.status(503).send({res:"Algo salio mal: error interno en la base de datos"});
        console.log(`Error:  ${er.sqlMessage}. \n SQL: ${er.sql}`);
    }
    }
    
exports.View=async(req,res)=>{
try {
    const stock=await Stock.View();
    console.log(stock);
    if(stock !== null){
        res.send({res:stock})
        return
    }
    if(typeof stock === 'undefined' ){
        res.status(503).send({res:"Algo salio mal: error interno en la base de datos"});
        return
    }
   res.status(404).send({res:"No encontro informacion del stock"});
} catch (er) {
    res.status(503).send({res:"Algo salio mal: error interno en la base de datos"});
    console.log(`Error:  ${er.sqlMessage}. \n SQL: ${er.sql}`);
}
}

exports.Viewxd=async(req,res)=>{
    try {
        const detalleproducto=await Stock.Viewxd(req.params.id);
        console.log(detalleproducto);
        if(detalleproducto !== null){
            res.send({res:detalleproducto[0]})
            return
        }
        if(typeof detalleproducto === 'undefined' ){
            res.status(503).send({res:"Algo salio mal: error interno en la base de datos"});
            return
        }
       res.status(404).send({res:"No encontro informacion del detalle medida"});
    } catch (er) {
        res.status(503).send({res:"Algo salio mal: error interno en la base de datos"});
        console.log(`Error:  ${er.sqlMessage}. \n SQL: ${er.sql}`);
    }
    }
    exports.Viewxventa=async(req,res)=>{
        try {
            const stock=await Stock.Viewxventa();
            console.log(stock);
            if(stock !== null){
                res.send({res:stock})
                return
            }
            if(typeof stock === 'undefined' ){
                res.status(503).send({res:"Algo salio mal: error interno en la base de datos"});
                return
            }
           res.status(404).send({res:"No encontro informacion del stock"});
        } catch (er) {
            res.status(503).send({res:"Algo salio mal: error interno en la base de datos"});
            console.log(`Error:  ${er.sqlMessage}. \n SQL: ${er.sql}`);
        }
        }