const Connection=require("../Db/Connection");
const util=require("util");
const query=util.promisify(Connection.query).bind(Connection);

const Ubicacion=function(ubicacion){
    this.idubicacion=ubicacion.idubicacion,
    this.nombre=ubicacion.nombre,
    this.estado=ubicacion.estado
    
}

Ubicacion.View= async ()=>{
    return await query(`select *from view_ubicacion;`)
}


Ubicacion.Create= async (ubicacion)=>{
    return await query(`call ingreso_ubicacion(${ubicacion.idubicacion}, "${ubicacion.nombre}","${ubicacion.estado}","new");`);
}


Ubicacion.Update= async (ubicacion)=>{
    return await query(`call ingreso_ubicacion(${ubicacion.idubicacion}, "${ubicacion.nombre}","${ubicacion.estado}","update");`);
}


Ubicacion.Delete= async (id)=>{
    return await query(`call ingreso_ubicacion(${id}, "${null}","${null}","delete");`);
}


Ubicacion.ViewOne= async (id)=>{
    return await query(`call ingreso_ubicacion(${id}, "${null}","${null}","viewone");`);
}

module.exports=Ubicacion;