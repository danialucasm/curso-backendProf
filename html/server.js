const express = require ('express');

const app = express();

//Para indicar que vamos a usar un motor de vistas ejs
app.set('view engine', 'ejs');

app.use('/estilos',express.static('estaticos')); //use inserta un middleware, ahora podemos acceder a los arch dentro de la carpeta estaticos, usando una direccion que incluya el nombre del archivo. 

//Nuevo get para el motor de vistas ejs

app.get('/',function(req,res){
    res.render('index');
});



//-----------------------------Esto se ocupa antes de definir el motor de VISTA
// app.get('/',function(req,res){
//     res.sendFile('index.html',{ //la res es un json
//         root: __dirname
//     });  //Recibe como argumento el nombre del archivo que queremos enviar.
// });


app.listen(3000);

