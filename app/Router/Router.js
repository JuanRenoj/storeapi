

function Router(app){
 const IsLogin = require('../Midleware/IsLogin'); 
 const proveedor=require("../Contoller/C_Proveedor.js");
 const cliente=require('../Contoller/C_Cliente');
 const empleado=require('../Contoller/C_Empleado')
 const categoria=require('../Contoller/C_Categoria');
 const medida=require('../Contoller/C_Medida');
 const detallemedida=require('../Contoller/C_DetalleMedida');
 const ubicacion=require('../Contoller/C_Ubicacion');
 const stock=require('../Contoller/C_Stock');
 const producto=require('../Contoller/C_Producto');
 const detallefactura=require("../Contoller/C_Detallefactura")
 const factura =require("../Contoller/C_Factura")
 const precio=require("../Contoller/C_Precio");
 const preciocliente=require("../Contoller/C_Preciocliente");
 const upload=require("../Contoller/C_upload");
 const info=require("../Contoller/C_Info");
 const usuario=require("../Contoller/C_Usuario");
 const permiso=require("../Contoller/C_Permiso");
 const informe=require("../Contoller/C_Informe")
 
 
 app.get("/",function(req,res){
    res.send({res:"Bievenidos a la api de jrstore"});
 })

 app.post('/img/upload',upload.create);
 app.get("/img/delete/:name",upload.delete);
 app.get("/imgs/view/:name",upload.view);

 app.post("/info",info.Create);
 app.post("/info/update",info.Update);
 app.get("/info/view",info.View);

 app.post("/informe/vendido",IsLogin,informe.Vendido);
 app.post("/informe/ventas",IsLogin,informe.Ventas);
 app.post("/informe/balance",IsLogin,informe.Balance);

app.post("/proveedor", IsLogin,proveedor.Create)
app.post("/proveedor/update", IsLogin,proveedor.Update)
app.post("/proveedor/delete/:id",IsLogin, proveedor.Delete)
app.get("/proveedor/viewone/:id",IsLogin, proveedor.ViewOne)
app.get("/proveedor/view",IsLogin, proveedor.View)

app.post("/cliente",IsLogin, cliente.Create)
app.post("/cliente/update",IsLogin, cliente.Update)
app.post("/cliente/delete/:id",IsLogin, cliente.Delete)
app.get("/cliente/viewone/:id", IsLogin,cliente.ViewOne)
app.get("/cliente/view",IsLogin, cliente.View)

app.post("/empleado",IsLogin, empleado.Create)
app.post("/empleado/update",IsLogin, empleado.Update)
app.post("/empleado/delete/:id", IsLogin,empleado.Delete)
app.get("/empleado/viewone/:id", IsLogin,empleado.ViewOne)
app.get("/empleado/view", IsLogin,empleado.View)

app.post("/categoria", IsLogin,categoria.Create)
app.post("/categoria/update",IsLogin, categoria.Update)
app.post("/categoria/delete/:id", IsLogin,categoria.Delete)
app.get("/categoria/viewone/:id", IsLogin,categoria.ViewOne)
app.get("/categoria/view", IsLogin,categoria.View)

app.post("/medida",IsLogin, medida.Create)
app.post("/medida/update",IsLogin, medida.Update)
app.post("/medida/delete/:id",IsLogin, medida.Delete)
app.get("/medida/viewone/:id",IsLogin, medida.ViewOne)
app.get("/medida/view",IsLogin, medida.View)

app.post("/detallemedida",IsLogin, detallemedida.Create)
app.post("/detallemedida/update",IsLogin, detallemedida.Update)
app.post("/detallemedida/delete/:id",IsLogin, detallemedida.Delete)
app.get("/detallemedida/viewone/:id",IsLogin, detallemedida.ViewOne)
app.get("/detallemedida/view",IsLogin, detallemedida.View)
app.get("/detallemedida/viewxd/:id",IsLogin, detallemedida.Viewxd)

app.post("/ubicacion",IsLogin, ubicacion.Create)
app.post("/ubicacion/update", IsLogin,ubicacion.Update)
app.post("/ubicacion/delete/:id",IsLogin, ubicacion.Delete)
app.get("/ubicacion/viewone/:id", IsLogin,ubicacion.ViewOne)
app.get("/ubicacion/view", IsLogin,ubicacion.View)

app.post("/usuario",IsLogin, usuario.Create)
app.post("/usuario/update",IsLogin, usuario.Update)
app.post("/usuario/delete/:id",IsLogin, usuario.Delete)
app.post("/usuario/login", usuario.Viewlogin)
app.get("/usuario/viewone/:id",IsLogin, usuario.ViewOne)
app.get("/usuario/viewxd/:id",IsLogin, usuario.Viewxd)
app.get("/usuario/view",IsLogin, usuario.View)

app.post("/permiso",IsLogin, permiso.Create)
app.post("/permiso/update",IsLogin, permiso.Update)
app.post("/permiso/delete/:id",IsLogin, permiso.Delete)
app.get("/permiso/viewone/:id",IsLogin, permiso.ViewOne)
app.get("/permiso/viewxd/:id", IsLogin,permiso.Viewxd)
app.get("/permiso/view",IsLogin, permiso.View)

app.post("/stock", IsLogin,stock.Create)
app.post("/stock/update", IsLogin,stock.Update)
app.post("/stock/delete/:id", IsLogin,stock.Delete)
app.get("/stock/viewone/:id",IsLogin, stock.ViewOne)
app.get("/stock/view",IsLogin, stock.View)
app.get("/stockventa/view",IsLogin, stock.Viewxventa)
app.get("/stock/viewxd/:id", IsLogin,stock.Viewxd)

app.post("/producto",IsLogin, producto.Create)
app.post("/producto/update",IsLogin, producto.Update)
app.post("/producto/delete/:id", IsLogin,producto.Delete)
app.get("/producto/viewone/:id",IsLogin, producto.ViewOne)
app.get("/producto/view", IsLogin,producto.View)
app.get("/producto/vendido/view",IsLogin,producto.ViewVendido)
app.get("/producto/registrado/view",IsLogin,producto.Registrado)
app.get("/producto/inventario/view",IsLogin,producto.ViewInventario)

app.post("/factura", IsLogin,factura.Create)
app.post("/factura/update",IsLogin, factura.Update)
app.post("/factura/delete/:id",IsLogin, factura.Delete)
app.get("/factura/viewone/:id", IsLogin,factura.ViewOne)
app.get("/facturapdf/viewone/:id", factura.Viewpdf)
app.get("/factura/view",IsLogin, factura.View)

app.post("/detallefactura", IsLogin,detallefactura.Create)
app.post("/detallefactura/update",IsLogin, detallefactura.Update)
app.post("/detallefactura/delete/:id",IsLogin, detallefactura.Delete)
app.get("/detallefactura/viewone/:id", IsLogin,detallefactura.ViewOne)
app.get("/detallefactura/viewxd/:id", IsLogin,detallefactura.Viewxd)
app.get("/detallefactura/view",IsLogin, detallefactura.View)

app.post("/precio", IsLogin,precio.Create)
app.post("/precio/update",IsLogin, precio.Update)
app.post("/precio/delete/:id", IsLogin,precio.Delete)
app.get("/precio/viewone/:id",IsLogin, precio.ViewOne)
app.get("/precio/viewxd/:id",IsLogin, precio.Viewxd)
app.get("/precio/view", IsLogin,precio.View)

app.post("/preciocliente",IsLogin, preciocliente.Create)
app.post("/preciocliente/update",IsLogin, preciocliente.Update)
app.post("/preciocliente/delete/:id",IsLogin, preciocliente.Delete)
app.get("/preciocliente/viewone/:id", IsLogin,preciocliente.ViewOne)
app.get("/preciocliente/view",IsLogin, preciocliente.View)

}
module.exports=Router;