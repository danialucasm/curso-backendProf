const express = require('express');
const sqlite3 = require('sqlite3'); //traemos el paquete
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const pruebas = require('../bdd/controllers/prueba.controller');

const app = express();

// const sequelize = new Sequelize('proyecto-back',null,null,{
//     dialect: 'sqlite',
//     storage: './proyecto-back'
// });  la primera vez no mas debemos ejecutar esto, sino estariamos conectandonos multiples veces


app.use(bodyParser.urlencoded({extended:true})); //para interpretar la peticion
app.set('view engine','pug');

app.get('/pruebas', pruebas.home);

app.post('/pendientes',function(req,res){
    //db.run(`INSERT INTO prueba(description) VALUES(?) `, req.body.description);  //interpolacion `` , ahora es dinamico, lo que se nos pida en el cuerpo de la peticion lo va a insertar
    res.send('Insercion finalizada');
}); //como es POST, necesitamos leer y traducir el cuerpo de la peticion, por eso necesitamos BODY-PARSER



app.listen(3000);


