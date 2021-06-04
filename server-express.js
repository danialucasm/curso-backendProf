const express = require ('express'); //libreria q instale por npm
const bodyParser = require('body-parser');


const app = express(); //objeto que especifica rutas


app.use( bodyParser.urlencoded({extended:true})); //Le pedimos que use el analizador de body-parser,
                                                  // Para leer el cuerpo de datos de una peticion, con el formado urlencoded, la opcion extended sirve para q pueda enviar parametros anidados


app.get('/saludo',function(req,res){ //DATOS CON GET

    res.send(`Hola ${req.query.name}`); 

});

app.post('/', function(req,res){ //DATOS CON POST *instalando body-parser*

    res.send(`Hola ${req.body.name}`);
});
app.listen(3000);