const http = require ('http'); //Aca nos provee Node una libreria con el protocolo http, estamos importando a este objeto 

function responderPeticion(request,response){
    response.end('Hola gente'); //aca cada vez que haya una peticion, vamos a requerir los dos argumentos
} //request: info de peticion, response: funcionalidad para identificar respuestas

let server = http.createServer(responderPeticion); //creamos el servidor, pasamos una funcion que se ejecuta cada vez que haya una peticion


server.listen(3000); //Lo que escucha el servidor 