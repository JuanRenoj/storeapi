const Connection=require("../Db/Connection");
const util=require("util");
const query=util.promisify(Connection.query).bind(Connection);

const Proveedor=function(proveedor){
    this.idproveedor=proveedor.idproveedor,
    this.nombre=proveedor.nombre
}

Proveedor.View= async ()=>{
    return await query(`select *from proveedor;`)
}


Proveedor.Create= async (proveedor)=>{
    return await query(`call ingreso_proveedor(${proveedor.idproveedor}, "${proveedor.nombre}","new");`)
}


Proveedor.Update= async (proveedor)=>{
    return await query(`call ingreso_proveedor(${proveedor.idproveedor}, "${proveedor.nombre}","update");`)
}


Proveedor.Delete= async (id)=>{
    return await query(`call ingreso_proveedor(${id}, "${null}","delete");`)
}


Proveedor.ViewOne= async (id)=>{
    return await query(`call ingreso_proveedor(${id}, "${null}","viewone");`)
}

module.exports=Proveedor;
/*class Proveedor{
    constructor(idproveedor,nombre){
       this.idproveedor =idproveedor,
       this.nombre=nombre
    }

    async Create(proveedor){
        return await query(
          //  `call ingreso_proveedor(${proveedor.idproveedor},"${proveedor,this.nombre}");`
          `SELECT * FROM PROVEEDOR where idproveedor=1;`
            );
    }

}

*/