const express = require('express');
const sqlite3 = require('sqlite3'); //traemos el paquete
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');

const app = express();

const sequelize = new Sequelize('proyecto-back',null,null,{
    dialect: 'sqlite',
    storage: './proyecto-back'
}); 


app.use(bodyParser.urlencoded({extended:true})); //para interpretar la peticion


app.post('/pendientes',function(req,res){
    //db.run(`INSERT INTO prueba(description) VALUES(?) `, req.body.description);  //interpolacion `` , ahora es dinamico, lo que se nos pida en el cuerpo de la peticion lo va a insertar
    res.send('Insercion finalizada');
}); //como es POST, necesitamos leer y traducir el cuerpo de la peticion, por eso necesitamos BODY-PARSER



app.listen(3000);


// //Esto nos permite escuchar eventos relacionados con el proceso
// process.on('SIGINT',function(){  //SIGINT ES CTRL+C
//     console.log('Adios, atte. El Servidor');
//     db.close(); //para cerrar el servidor
//     process.exit();
// }); 
//  //En este caos vamos a escuchar al msj que es para cerrar osea control+c, para que cierre el servidor