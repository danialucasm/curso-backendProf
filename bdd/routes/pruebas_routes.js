const express = require('express');
let router = express.Router(); 
let PruebasController = require('../controllers/prueba.controller');

router.route('/pruebas').get(PruebasController.index).post(PruebasController.create); //estoy definiendo dos endpoints para el mismo recurso

router.get('/pruebas/new', PruebasController.new); 

router.route('/pruebas/:id').get(PruebasController.show).put(PruebasController.update);//wildcard es el :id, es como una variable q indica que va a ir ahi

module.exports = router;