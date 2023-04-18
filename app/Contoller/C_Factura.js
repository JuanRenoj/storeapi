const Factura = require('../Model/M_Factura');
const PdfkitConstruct=require('pdfkit-construct');
const Info=require('../Model/M_Info');
//const { fill, fillColor } = require('pdfkit');

exports.Create=async(req,res)=>{
    try {
       await Factura.Create(new Factura(req.body));
     const no_factura= await Factura.no_orden();
     if(no_factura !==null){
        res.send({res:no_factura})
        return
     }
        res.status(200).send({res:"ingresado corectamento"});
    } catch (er) {
        console.log(er)
        res.status(503).send({res: "No se puedo ingresar, erorr"})
        console.log(`Error:  ${er.sqlMessage}. \n SQL: ${er.sql}`);
    }
}
exports.Update=async(req,res)=>{
    try {
        const factura=await Factura.Update(new Factura(req.body));
        console.log(factura)
        res.status(200).send({res:"ingresado corectamento"});
    } catch (er) {
        console.log(er)
        res.status(503).send({res: "No se puedo ingresar, erorr"})
        console.log(`Error:  ${er.sqlMessage}. \n SQL: ${er.sql}`);
    }
}
exports.Delete=async(req,res)=>{
    try {
        console.log(req.params.id)
        const factura=await Factura.Delete(req.params.id);
        console.log(factura)
        res.status(200).send({res:"Eliminado Correctamente"});
    } catch (er) {
        console.log(er)
        res.status(503).send({res: "No se puedo eliminar, erorr"})
        console.log(`Error:  ${er.sqlMessage}. \n SQL: ${er.sql}`);
    }
}
   
exports.ViewOne=async(req,res)=>{
    try {
        const factura=await Factura.ViewOne(req.params.id);
        console.log(factura);
        if(factura !== null){
            res.send({res:factura})
            return
        }
        if(typeof factura === 'undefined' ){
            res.status(503).send({res:"Algo salio mal: error interno en la base de datos"});
            return
        }
       res.status(404).send({res:"No encontro informacion del factura"});
    } catch (er) {
        res.status(503).send({res:"Algo salio mal: error interno en la base de datos"});
        console.log(`Error:  ${er.sqlMessage}. \n SQL: ${er.sql}`);
    }
    }
    
    
exports.Viewpdf=async(req,res)=>{
    try {
        const infoEmpresa=await Info.View()
        const factura=await Factura.Viewfac(req.params.id);
        const itemdetalle=await Factura.Viewpdf(req.params.id);
let info=infoEmpresa[0];
        let datosFactura=factura[0];
        const datosdetalle=itemdetalle[0]
let datos={
    ...factura[0],
    detalle:[...datosdetalle]
}
        console.log(datos)
console.log(itemdetalle[0])
let fontNormal = 'Helvetica';
let fontBold = 'Helvetica-Bold';




const doc=new PdfkitConstruct({
    size:'A4',
    margins:{top:20,left:20,right:20,bottom:20},
    bufferPages:true

});

const filename=`factura${req.params.id}`;
const stream=res.writeHead(200,{
    'Content-Type':'application/pdf',
    'Content-Disposition':`attachment;filename=${filename}.pdf`,
})
doc.on('data',(data)=>{stream.write(data)})
doc.on('end',()=>{stream.end()})

/*
doc.setDocumentHeader({
    height:'25%'
},()=>{
}) */

doc.fontSize(13).fill("#ff0034").text(`Factura no.: ${req.params.id}`,{
    align:'right'
})  
const img=__dirname+'/imgs/'+info.logo;
doc.image(`${img}`, 20, 20, {width: 100,height:100});

doc.moveDown()
//doc.rect(12, 15,560,0.2).fill("#000").stroke("#000");
doc.fontSize(16).font(fontBold).fill("#000").text(`${info.nombre}`,{align:'center'});
doc.fontSize(12).font(fontNormal).text(` ${info.descripcion}`,{align:'center'});
doc.fontSize(12).text(`Direccion: ${info.direccion}`,{align:'center'});
doc.fontSize(12).text(`Telefonos: ${info.telefonos}`,{align:'center'});
doc.fontSize(12).text(`Email: ${info.correo}`,{align:'center'});

doc.moveDown()
doc.fontSize(14).fill("#000").text(`Datos del cliente:`);
doc.fontSize(12).fill("#000").text(`Nimbre: ${datosFactura[0].cliente}`);
doc.fontSize(12).text(`Direccion: ${datosFactura[0].direccion}`);
doc.fontSize(12).text(`Atendio: ${datosFactura[0].empleado}`);
doc.fontSize(12).text(`Fecha: ${new Date(datosFactura[0].fecha).toLocaleString()}`);
 //lista de productos
 doc.rect(12,220,560,20).fill("#3224f8").stroke("#3224f8");
 doc.fill("#fff").text("Cantidad",20,226,{width:90});
 doc.text("Descripcion",100,226,{width:200});
 doc.text("Precio",400,226,{width:100});
 doc.text("Subtotal", 500, 226, { width: 100 });

let noProducto=1;
itemdetalle[0].forEach(element => {
    let y=226 +(noProducto * 20);
    doc.fill("#000").text(element.cantidad,20,y,{width:90});
    doc.text(element.descripcion,100,y,{width:200})
    doc.text(element.precio,400,y,{width:100})
    doc.text(element.subtotal,500,y,{width:100})
    noProducto ++;
});

doc.rect(12, 226+(noProducto*20),560,0.2).fill("#000").stroke("#000");
noProducto ++;
doc.font(fontBold).text("Total:  ",400,226+(noProducto*18));
doc.font(fontBold).text(`${datosFactura[0].total}`, 500,226+(noProducto*18))
/*footer

doc.setDocumentFooter({}, () => {
    doc.lineJoin('miter')
    .rect(0, doc.footer.y, doc.page.width, doc.footer.options.heightNumber).fill("#c2edbe");



    doc.fontSize(16)
        .text(`Total: ${datosFactura[0].total}`,doc.footer.x, doc.footer.y+15);
});


doc.addTable([
    {key:'descripcion',label:'Descripción',align:'left'},
    {key:'cantidad',label:'Cantidad',align:'left'},
    {key:'precio',label:'Precio',align:'left'},
    {key:'subtotal',label:'Sub Total',align:'right'}
], itemdetalle[0],{
    border: {size: 0.1, color: '#cdcdcd'},
    width: "fill_body",
    striped: true,
    stripedColors: ["#fff", "#fff"],
    cellsPadding: 5,
    marginTop:0,
    marginLeft: 0,
    marginRight: 0,
    marginBottom:20,
    headAlign: 'left',
    headBackground:'#fff'

});


doc.render();
doc.moveDown()
doc.fontSize(14).text(`Total:  Q${datosFactura[0].total}`,{
    align:'right'
})
*/
 //doc.pipe(res)
doc.end()
       
    } catch (er) {
        console.log(er)
        res.status(503).send({res:"Algo salio mal: error interno en la base de datos"});
        console.log(`Error:  ${er.sqlMessage}. \n SQL: ${er.sql}`);
    }
    }
    
exports.View=async(req,res)=>{
try {
    const factura=await Factura.View();
    console.log(factura);
    if(factura !== null){
        res.send({res:factura})
        return
    }
    if(typeof factura === 'undefined' ){
        res.status(503).send({res:"Algo salio mal: error interno en la base de datos"});
        return
    }
   res.status(404).send({res:"No encontro informacion del factura"});
} catch (er) {
    res.status(503).send({res:"Algo salio mal: error interno en la base de datos"});
    console.log(er);
}
}
