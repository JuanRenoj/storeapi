const Connection=require("../Db/Connection");
const util=require("util");
const query=util.promisify(Connection.query).bind(Connection);

const Factura=function(factura){
    this.idfactura=factura.idfactura,
    this.idcliente=factura.idcliente,
    this.idempleado=factura.idempleado,
    this.fecha=factura.fecha,
    this.total=factura.total,
    this.estado=factura.estado,
    this.lugar=factura.lugar
    
}
/**
 select total, dayname(fecha) as nombre,  sum(total) as total from factura group by nombre;
select  * from factura
  
 */
Factura.View= async ()=>{
    return await query(`select * from view_ventas`)
}
Factura.no_orden= async ()=>{
    return await query(`select *from no_factura;`)
}


Factura.Create= async (factura)=>{
    return await query(`call ingreso_factura(${factura.idfactura}, ${factura.idcliente},${factura.idempleado},"${factura.fecha}",${factura.total},"${factura.estado}","${factura.lugar}","new");`);
}


Factura.Update= async (factura)=>{
    return await query(`call ingreso_factura(${factura.idfactura}, ${factura.idcliente},${factura.idempleado},"${factura.fecha}",${factura.total},"${factura.estado}","${factura.lugar}","update");`);
}


Factura.Delete= async (id)=>{
    return await query(`call ingreso_factura(${id}, ${null},${null},"2023-01-01",${null},"${null}","${null}","delete");`);
}


Factura.ViewOne= async (id)=>{
    return await query(`call ingreso_factura(${id}, ${null},${null},"2023-01-01",${null},"${null}","${null}","viewfac");`);
}
Factura.Viewfac= async (id)=>{
    return await query(`call ingreso_factura(${id}, ${null},${null},"2023-01-01",${null},"${null}","${null}","viewfac");`);
}
Factura.Viewpdf= async (id)=>{
    return await query(`call ingreso_factura(${id}, ${null},${null},"2023-01-01",${null},"${null}","${null}","viewxdf");`);
}

module.exports=Factura;