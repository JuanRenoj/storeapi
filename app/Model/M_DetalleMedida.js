const Connection=require("../Db/Connection");
const util=require("util");
const query=util.promisify(Connection.query).bind(Connection);

const DetalleMedida=function(detallemedida){
    this.iddetallem=detallemedida.iddetallem,
    this.idmedida=detallemedida.idmedida,
    this.nombre=detallemedida.nombre,
    this.factor=detallemedida.factor
}

DetalleMedida.View= async ()=>{
    return await query(`select *from view_detallemedida;`)
}


DetalleMedida.Create= async (detallemedida)=>{
    return await query(`call ingreso_detalle_medida(${detallemedida.iddetallem}, ${detallemedida.idmedida},"${detallemedida.nombre}",${detallemedida.factor},"new");`);
}


DetalleMedida.Update= async (detallemedida)=>{
    return await query(`call ingreso_detalle_medida(${detallemedida.iddetallem}, ${detallemedida.idmedida},"${detallemedida.nombre}",${detallemedida.factor},"update");`);
}


DetalleMedida.Delete= async (id)=>{
    return await query(`call ingreso_detalle_medida(${id}, ${null},"${null}",${null},"delete");`);
}


DetalleMedida.ViewOne= async (id)=>{
    return await query(`call ingreso_detalle_medida(${id}, ${null},"${null}",${null},"viewone");`);
}


DetalleMedida.Viewxd= async (id)=>{
    return await query(`call ingreso_detalle_medida(${null}, ${id},"${null}",${null},"viewxd");`);
}

module.exports=DetalleMedida;