const Informe = require('../Model/M_Informe');


exports.Vendido=async(req,res)=>{
    try {
        const informe=await Informe.Vendido(new Informe(req.body));
        console.log(informe);
        if(informe !== null){
            res.send({res:informe[0]})
            return
        }
        if(typeof informe === 'undefined' ){
            res.status(503).send({res:"Algo salio mal: error interno en la base de datos"});
            return
        }
       res.status(404).send({res:"No encontro informacion del informe"});
    } catch (er) {
        console.log(er)
        res.status(503).send({res:"Algo salio mal: error interno en la base de datos"});
      //  console.log(`Error:  ${er.sqlMessage}. \n SQL: ${er.sql}`);
    }
    }
    

    exports.Ventas=async(req,res)=>{
        try {
            const informe=await Informe.Ventas(new Informe(req.body));
            console.log(informe);
            if(informe !== null){
                res.send({res:informe[0]})
                return
            }
            if(typeof informe === 'undefined' ){
                res.status(503).send({res:"Algo salio mal: error interno en la base de datos"});
                return
            }
           res.status(404).send({res:"No encontro informacion del informe"});
        } catch (er) {
            console.log(er)
            res.status(503).send({res:"Algo salio mal: error interno en la base de datos"});
           // console.log(`Error:  ${er.sqlMessage}. \n SQL: ${er.sql}`);
        }
        }
        

        
exports.Balance=async(req,res)=>{
    try {
        const informe=await Informe.Balance(new Informe(req.body));
        console.log(informe);
        if(informe !== null){
            res.send({res:informe[0]})
            return
        }
        if(typeof informe === 'undefined' ){
            res.status(503).send({res:"Algo salio mal: error interno en la base de datos"});
            return
        }
       res.status(404).send({res:"No encontro informacion del informe"});
    } catch (er) {
        console.log(er)
        res.status(503).send({res:"Algo salio mal: error interno en la base de datos"});
       // console.log(`Error:  ${er.sqlMessage}. \n SQL: ${er.sql}`);
    }
    }
    
