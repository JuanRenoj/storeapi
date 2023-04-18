const Connection=require("../Db/Connection");
const util=require("util");
const query=util.promisify(Connection.query).bind(Connection);

const Stock=function(stock){
    this.idstock=stock.idstock,
    this.idproducto=stock.idproducto,
    this.idproveedor=stock.idproveedor,
    this.detallemedida=stock.detallemedida,
    this.idubicacion=stock.idubicacion,
    this.cantidad=stock.cantidad,
    this.precio_compra=stock.precio_compra
  
    
}

Stock.View= async ()=>{
    return await query(`select *from view_stock;`)
}
Stock.Viewxventa= async ()=>{
    return await query(`select * from view_producto_venta;`);
}


Stock.Create= async (stock)=>{
    return await query(`call ingreso_stock(${stock.idstock}, ${stock.idproducto},${stock.idproveedor},${stock.detallemedida},${stock.idubicacion},${stock.cantidad},${stock.precio_compra},"new");`);
}


Stock.Update= async (stock)=>{
    return await query(`call ingreso_stock(${stock.idstock}, ${stock.idproducto},${stock.idproveedor},${stock.detallemedida},${stock.idubicacion},${stock.cantidad},${stock.precio_compra},"update");`);
}


Stock.Delete= async (id)=>{
    return await query(`call ingreso_stock(${id}, ${null},${null},${null},${null},${null},${null},"delete");`);
}


Stock.ViewOne= async (id)=>{
    return await query(`call ingreso_stock(${id}, ${null},${null},${null},${null},${null},${null},"viewone");`);
}
Stock.Viewxd= async (id)=>{
    return await query(`call ingreso_stock(${null}, ${id},${null},${null},${null},${null},${null},"viewxd");`);
}

module.exports=Stock;