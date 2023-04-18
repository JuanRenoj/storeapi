const Connection=require("../Db/Connection");
const util=require("util");
const query=util.promisify(Connection.query).bind(Connection);

const Medida=function(medida){
    this.idmedida=medida.idmedida,
    this.nombre=medida.nombre,
    this.prefijo=medida.prefijo
}

Medida.View= async ()=>{
    return await query(`select *from view_medida;`)
}


Medida.Create= async (medida)=>{
    return await query(`call ingreso_medida(${medida.idmedida}, "${medida.nombre}","${medida.prefijo}","new");`)
}


Medida.Update= async (medida)=>{
    return await query(`call ingreso_medida(${medida.idmedida}, "${medida.nombre}","${medida.prefijo}","update");`)
}


Medida.Delete= async (id)=>{
    return await query(`call ingreso_medida(${id}, "${null}","${null}","delete");`)
}


Medida.ViewOne= async (id)=>{
    return await query(`call ingreso_medida(${id}, "${null}","${null}","viewone");`)
}

module.exports=Medida;
