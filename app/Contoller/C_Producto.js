const Producto = require('../Model/M_Producto');

exports.Create=async(req,res)=>{
    try {
        const producto=await Producto.Create(new Producto(req.body));
        console.log(producto)
        res.status(200).send({res:"ingresado corectamento"});
    } catch (er) {
        console.log(er)
        res.status(503).send({res: "No se puedo ingresar, erorr"})
        console.log(`Error:  ${er.sqlMessage}. \n SQL: ${er.sql}`);
    }
}
exports.Update=async(req,res)=>{
    try {
        const producto=await Producto.Update(new Producto(req.body));
        console.log(producto)
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
        const producto=await Producto.Delete(req.params.id);
        console.log(producto)
        res.status(200).send({res:"Eliminado Correctamente"});
    } catch (er) {
        console.log(er)
        res.status(503).send({res: "No se puedo eliminar, erorr"})
        console.log(`Error:  ${er.sqlMessage}. \n SQL: ${er.sql}`);
    }
}
   
exports.ViewOne=async(req,res)=>{
    try {
        const producto=await Producto.ViewOne(req.params.id);
        console.log(producto);
        if(producto !== null){
            res.send({res:producto})
            return
        }
        if(typeof producto === 'undefined' ){
            res.status(503).send({res:"Algo salio mal: error interno en la base de datos"});
            return
        }
       res.status(404).send({res:"No encontro informacion del producto"});
    } catch (er) {
        res.status(503).send({res:"Algo salio mal: error interno en la base de datos"});
        console.log(`Error:  ${er.sqlMessage}. \n SQL: ${er.sql}`);
    }
    }
    
exports.View=async(req,res)=>{
try {
    const producto=await Producto.View();
    console.log(producto);
    if(producto !== null){
        res.send({res:producto})
        return
    }
    if(typeof producto === 'undefined' ){
        res.status(503).send({res:"Algo salio mal: error interno en la base de datos"});
        return
    }
   res.status(404).send({res:"No encontro informacion del producto"});
} catch (er) {
    res.status(503).send({res:"Algo salio mal: error interno en la base de datos"});
    console.log(`Error:  ${er.sqlMessage}. \n SQL: ${er.sql}`);
}
}


exports.Registrado=async(req,res)=>{
    try {
        const producto=await Producto.Registrado();
        console.log(producto);
        if(producto !== null){
            res.send({res:producto[0]})
            return
        }
        if(typeof producto === 'undefined' ){
            res.status(503).send({res:"Algo salio mal: error interno en la base de datos"});
            return
        }
       res.status(404).send({res:"No encontro informacion del producto"});
    } catch (er) {
        res.status(503).send({res:"Algo salio mal: error interno en la base de datos"});
        console.log(`Error:  ${er.sqlMessage}. \n SQL: ${er.sql}`);
    }
    }
    

exports.ViewInventario=async(req,res)=>{
    try {
        const producto=await Producto.ViewInventario();
        console.log(producto);
        if(producto !== null){
            res.send({res:producto})
            return
        }
        if(typeof producto === 'undefined' ){
            res.status(503).send({res:"Algo salio mal: error interno en la base de datos"});
            return
        }
       res.status(404).send({res:"No encontro informacion del producto"});
    } catch (er) {
        console.log(er);
        res.status(503).send({res:"Algo salio mal: error interno en la base de datos"});
        console.log(`Error:  ${er.sqlMessage}. \n SQL: ${er.sql}`);
    }
    }

exports.ViewVendido=async (req,res)=>{
try{
    const producto=await Producto.ViewVendido();
    if(producto !==null){
        res.send({res:producto})
        return
    }
    if(typeof producto === 'undefined'){
        res.status(503).send({res:"Algo salio mal, error en la interno"});
        return
    }
    res.status(404).send({res:"No se encontro informacion del producto"})
}catch(error){
    console.log(error)
    res.status(503).send({res:"Algo salio mal, error en la interno"});
}
}