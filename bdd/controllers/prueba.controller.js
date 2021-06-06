//peticiones http para el modelo de nuestra tabla prueba
const Prueba = require('../models').Prueba;

module.exports ={

    home: function(req,res){
        Prueba.findAll().then(function(pruebas){
            res.render('pruebas/index',{probando: pruebas});
        });
    }
};