const Connection=require("../Db/Connection");
const util=require("util");
const query=util.promisify(Connection.query).bind(Connection);

const Categoria=function(categoria){
    this.idcategoria=categoria.idcategoria,
    this.nombre=categoria.nombre
}

Categoria.View= async ()=>{
    return await query(`select *from view_categoria;`)
}


Categoria.Create= async (categoria)=>{
    return await query(`call ingreso_categoria(${categoria.idcategoria}, "${categoria.nombre}","new");`)
}


Categoria.Update= async (categoria)=>{
    return await query(`call ingreso_categoria(${categoria.idcategoria}, "${categoria.nombre}","update");`)
}


Categoria.Delete= async (id)=>{
    return await query(`call ingreso_categoria(${id}, "${null}","delete");`)
}


Categoria.ViewOne= async (id)=>{
    return await query(`call ingreso_categoria(${id}, "${null}","viewone");`)
}

module.exports=Categoria;
