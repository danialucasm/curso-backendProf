//peticiones http para el modelo de nuestra tabla prueba
const Prueba = require('../models').Prueba;

module.exports ={
    index: function(req,res){
        Prueba.findAll().then((pruebas)=>{
            res.render('pruebas/index',{
                probando: pruebas
            }); //mostramos los registros como VISTAS
        })//consultamos todos los elementos q hay en la tabla
    },
    show: function(req,res){
        res.send(req.params);
    },
    create: function(req,res){
       Prueba.create({
           description: req.body.description
        }).then(result=>{
            res.json(result);
        }).catch(err=> {
            console.log(err);
            res.json(err);
        });
    },
    update:function(req,res){
        Prueba.update({description: req.body.description}, {
                where: {
                    id: req.params.id
                }
            }).then(function(response){
                res.redirect('/pruebas/'+req.params.id);
            }) //se va a acualizar los description q la tupla q cumpla con el where.
    },
    new: function(req,res){
        res.render('pruebas/new');
    }
};