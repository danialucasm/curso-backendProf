const express = require('express');
const cookieSession = require('cookie-session');

const app = express(); 

app.use(cookieSession({
    name: "session",
    keys: ['asdadasdasasdadd','1231asdawdcadasd'] //se usa para firmar las cookies mismas
}));


app.get('/', function (req,res){
    req.session.visits = req.session.visits || 0; //aca lo que hago es poner por defecto que sea 1 
    req.session.visits = req.session.visits + 1; // 

    res.send(`${req.session.visits} visita(s)`); //interpolacion
});


app.listen(3000);
