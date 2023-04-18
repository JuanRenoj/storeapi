const Connection=require("../Db/Connection");
const util=require("util");
const query=util.promisify(Connection.query).bind(Connection);

const Informe=function(informe){
    this.inicio=informe.inicio,
    this.final=informe.final,
    this.accion=informe.accion
}




Informe.Vendido= async (informe)=>{
    return await query(`call producto_masvendido("${informe.inicio}", "${informe.final}","${informe.accion}");`)
}

Informe.Ventas= async (informe)=>{
    return await query(`call consultar_ventas("${informe.inicio}", "${informe.final}","${informe.accion}");`)
}
Informe.Balance= async (informe)=>{
    return await query(`call consultar_balance("${informe.inicio}", "${informe.final}","${informe.accion}");`)
}

module.exports=Informe;
