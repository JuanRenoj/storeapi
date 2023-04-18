const Connection=require("../Db/Connection");
const util=require("util");
const query=util.promisify(Connection.query).bind(Connection);

const Cliente=function(cliente){
    this.idcliente=cliente.idcliente,
    this.nombre=cliente.nombre,
    this.apellido=cliente.apellido,
    this.direccion=cliente.direccion,
    this.telefono=cliente.telefono,
    this.correo=cliente.correo
    
}

Cliente.View= async ()=>{
    return await query(`select *from view_cliente;`)
}


Cliente.Create= async (cliente)=>{
    return await query(`call ingreso_cliente(${cliente.idcliente}, "${cliente.nombre}","${cliente.apellido}","${cliente.direccion}",${cliente.telefono},"${cliente.correo}","new");`);
}


Cliente.Update= async (cliente)=>{
    return await query(`call ingreso_cliente(${cliente.idcliente}, "${cliente.nombre}","${cliente.apellido}","${cliente.direccion}",${cliente.telefono},"${cliente.correo}","update");`);
}


Cliente.Delete= async (id)=>{
    return await query(`call ingreso_cliente(${id}, "${null}","${null}","${null}",${null},"${null}","delete");`);
}


Cliente.ViewOne= async (id)=>{
    return await query(`call ingreso_cliente(${id}, "${null}","${null}","${null}",${null},"${null}","viewone");`);
}

module.exports=Cliente;