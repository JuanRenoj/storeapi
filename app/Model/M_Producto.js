const Connection=require("../Db/Connection");
const util=require("util");
const query=util.promisify(Connection.query).bind(Connection);

const Producto=function(producto){
    this.idproducto=producto.idproducto,
    this.barrcode=producto.barrcode,
    this.idmedida=producto.idmedida,
    this.idcategoria=producto.idcategoria,
    this.descripcion=producto.descripcion,
    this.cant_max=producto.cant_max,
    this.cant_min=producto.cant_min,
    this.imagen=producto.imagen,
    this.estado=producto.estado
    
}

Producto.View= async ()=>{
    return await query(`select *from view_producto;`)
}
Producto.ViewInventario= async ()=>{
    return await query(`select *from inventario;`)
}

Producto.Registrado= async ()=>{
    return await query(`select *from pro_cantidad, pro_activos, pro_noactivos;`)
}

Producto.ViewVendido =async()=>{
    return await query("select * from view_productomasvendido")
}

Producto.Create= async (producto)=>{
    return await query(`call ingreso_producto(${producto.idproducto},"${producto.barrcode}", ${producto.idmedida},${producto.idcategoria},"${producto.descripcion}",${producto.cant_max},${producto.cant_min},"${producto.imagen}","${producto.estado}","new");`);
}


Producto.Update= async (producto)=>{
    return await query(`call ingreso_producto(${producto.idproducto},"${producto.barrcode}", ${producto.idmedida},${producto.idcategoria},"${producto.descripcion}",${producto.cant_max},${producto.cant_min},"${producto.imagen}","${producto.estado}","update");`);
}


Producto.Delete= async (id)=>{
    return await query(`call ingreso_producto(${id},${null}, ${null},${null},"${null}",${null},${null},"${null}","${null}","delete");`);
}


Producto.ViewOne= async (id)=>{
    return await query(`call ingreso_producto(${id}, ${null},${null},${null},"${null}",${null},${null},"${null}","${null}","viewone");`);
}

module.exports=Producto;