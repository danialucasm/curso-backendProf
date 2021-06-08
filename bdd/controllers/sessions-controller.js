const User = require('../models').User;

module.exports = {
    new : function(req,res){
        res.render('sessions/new');
    },
    create: function(req,res){
        User.login(req.body.email, req.body.password)
        .then(user => {
                if(user){
                    req.session.userId = user.id; //guardar el id que obtuvo el proceso de autenticacion
                }
                res.json(user)
            })
        .catch(err=>{
            console.log(err);
            res.json(err);
        })
                                                   
    }
};