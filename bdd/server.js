const express = require('express');
const sqlite3 = require('sqlite3'); //traemos el paquete
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const pruebas = require('../bdd/controllers/prueba.controller');
const session = require('express-session');

const app = express();

const pruebasRoutes = require('../bdd/routes/pruebas_routes');
const registraationRoutes = require('../bdd/routes/registration-routes');
const sessionsRoutes = require ('../bdd/routes/sessions-routes');
// const sequelize = new Sequelize('proyecto-back',null,null,{
//     dialect: 'sqlite',
//     storage: './proyecto-back'
// });  la primera vez no mas debemos ejecutar esto, sino estariamos conectandonos multiples veces


app.use(bodyParser.urlencoded({extended:true})); //para interpretar la peticion
app.set('view engine','pug');

app.use(session({
    secret:['1123asldkjasklasd','123124lkajdklasjdasdk'],
    saveUninitialized: false,
    resave: false
}));
// configuracion de modulo de sesiones


app.use(pruebasRoutes);
app.use(registraationRoutes);
app.use(sessionsRoutes);

app.listen(3000);


