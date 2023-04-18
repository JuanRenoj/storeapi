const Connection=require("../Db/Connection");
const util=require("util");
const query=util.promisify(Connection.query).bind(Connection);

const Precio=function(precio){
    this.idprecio=precio.idprecio,
    this.idproducto=precio.idproducto,
    this.iddetallem=precio.iddetallem,
    this.nombre=precio.nombre,
    this.precio=precio.precio
 
}

Precio.View= async ()=>{
    return await query(`select *from view_preciopro;`)
}


Precio.Create= async (precio)=>{
    return await query(`call ingreso_precio(${precio.idprecio}, ${precio.idproducto},${precio.iddetallem},"${precio.nombre}",${precio.precio},"new");`);
}


Precio.Update= async (precio)=>{
    return await query(`call ingreso_precio(${precio.idprecio}, ${precio.idproducto},${precio.iddetallem},"${precio.nombre}",${precio.precio},"update");`);
}


Precio.Delete= async (id)=>{
    return await query(`call ingreso_precio(${id}, ${null},${null},"${null}",${null},"delete");`);
}


Precio.ViewOne= async (id)=>{
    return await query(`call ingreso_precio(${id}, ${null},${null},"${null}",${null},"viewone");`);
}


Precio.Viewxd= async (id)=>{
    return await query(`call ingreso_precio(${null}, ${id},${null},"${null}",${null},"viewxd");`);
}

module.exports=Precio;