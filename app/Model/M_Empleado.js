const Connection=require("../Db/Connection");
const util=require("util");
const query=util.promisify(Connection.query).bind(Connection);

const Empleado=function(empleado){
    this.idempleado=empleado.idempleado,
    this.nombre=empleado.nombre,
    this.apellido=empleado.apellido,
    this.dpi=empleado.dpi,
    this.telefono=empleado.telefono,
    this.correo=empleado.correo,
    this.estado=empleado.estado
    
}

Empleado.View= async ()=>{
    return await query(`select *from view_empleado;`)
}


Empleado.Create= async (empleado)=>{
    return await query(`call ingreso_empleado(${empleado.idempleado}, "${empleado.nombre}","${empleado.apellido}","${empleado.dpi}",${empleado.telefono},"${empleado.correo}","${empleado.estado}","new");`);
}


Empleado.Update= async (empleado)=>{
    return await query(`call ingreso_empleado(${empleado.idempleado}, "${empleado.nombre}","${empleado.apellido}","${empleado.dpi}",${empleado.telefono},"${empleado.correo}","${empleado.estado}","update");`);
}


Empleado.Delete= async (id)=>{
    return await query(`call ingreso_empleado(${id}, "${null}","${null}","${null}",${null},"${null}","${null}","delete");`);
}


Empleado.ViewOne= async (id)=>{
    return await query(`call ingreso_empleado(${id}, "${null}","${null}","${null}",${null},"${null}","${null}","viewone");`);
}

module.exports=Empleado;