const Connection=require("../Db/Connection");
const util=require("util");
const query=util.promisify(Connection.query).bind(Connection);

const Preciocliente=function(preciocliente){
    this.idprecio=preciocliente.idprecio,
    this.idproducto=preciocliente.idproducto,
    this.iddetallem=preciocliente.iddetallem,
    this.idcliente=preciocliente.idcliente,
    this.preciocliente=preciocliente.preciocliente
 
}

Preciocliente.View= async ()=>{
    return await query(`select *from view_preciocliente;`)
}


Preciocliente.Create= async (preciocliente)=>{
    return await query(`call ingreso_precio(${preciocliente.idprecio}, ${preciocliente.idproducto},${preciocliente.iddetallem},${preciocliente.idcliente},${preciocliente.preciocliente},"new");`);
}


Preciocliente.Update= async (preciocliente)=>{
    return await query(`call ingreso_precio(${preciocliente.idprecio}, ${preciocliente.idproducto},${preciocliente.iddetallem},${preciocliente.idcliente},${preciocliente.preciocliente},"update");`);
}


Preciocliente.Delete= async (id)=>{
    return await query(`call ingreso_precio(${id}, ${null},${null},${null},${null},"delete");`);
}


Preciocliente.ViewOne= async (id)=>{
    return await query(`call ingreso_precio(${id}, ${null},${null},${null},${null},"viewone");`);
}


Preciocliente.Viewxd= async (id)=>{
    return await query(`call ingreso_precio(${null}, ${id},${null},${null},${null},"viewxd");`);
}

module.exports=Preciocliente;