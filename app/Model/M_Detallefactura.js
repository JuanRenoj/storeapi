const Connection=require("../Db/Connection");
const util=require("util");
const query=util.promisify(Connection.query).bind(Connection);

const Detallefactura=function(detallefactura){
    this.iddetalle=detallefactura.iddetalle,
    this.idfactura=detallefactura.idfactura,
    this.idproducto=detallefactura.idproducto,
    this.idstock=detallefactura.idstock,
    this.cantidad=detallefactura.cantidad,
    this.precio=detallefactura.precio,
    this.total=detallefactura.total
    
}

Detallefactura.View= async ()=>{
    return await query(`select *from view_detallefatura;`)
}


Detallefactura.Create= async (detallefactura)=>{
    return await query(`call ingreso_detalle_factura(${detallefactura.iddetalle}, ${detallefactura.idfactura},${detallefactura.idproducto},${detallefactura.idstock},${detallefactura.cantidad},${detallefactura.precio},${detallefactura.total},"new");`);
}


Detallefactura.Update= async (detallefactura)=>{
    return await query(`call ingreso_detalle_factura(${detallefactura.iddetalle}, ${detallefactura.idfactura},${detallefactura.idproducto},${detallefactura.idstock},${detallefactura.cantidad},${detallefactura.precio},${detallefactura.total},"update");`);
}


Detallefactura.Delete= async (id)=>{
    return await query(`call ingreso_detalle_factura(${id}, ${null},${null},${null},${null},${null},${null},"delete");`);
}


Detallefactura.ViewOne= async (id)=>{
    return await query(`call ingreso_detalle_factura(${id}, ${null},${null},${null},${null},${null},${null},"viewone");`);
}
Detallefactura.Viewxd= async (id)=>{
    return await query(`call ingreso_detalle_factura(${null}, ${id},${null},${null},${null},${null},${null},"viewxd");`);
}
module.exports=Detallefactura;