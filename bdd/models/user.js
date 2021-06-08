'use strict';

const bcrypt = require('bcrypt');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    password_hash: DataTypes.STRING,
    password: DataTypes.VIRTUAL //esto quiere decir que no se va a guardar en la bdd, pero si forma parte del modelo
  }, {
    sequelize,
    modelName: 'User',
  });
  User.login = function(email,password){
    //Buscar al usuario
    return User.findOne({
      where: {
        email: email
      }
    }).then(user=>{
      if(!user) return null; //solo si el proceso fue valido retorna null
     return user.authenticatePassword(password).then(valid=> valid ? user : null);
    });
  };

  User.prototype.authenticatePassword = function(password) {
    return new Promise((res,rej)=>{
      bcrypt.compare(password, this.password_hash, function(err,valid){
        if(err) return rej(err);
        res(valid);
         })
      })
    
    }

  User.beforeCreate(function(user,options){

    return new Promise((res,rej)=>{
      if(user.password){ //si contiene algo hace lo del hash
        bcrypt.hash(user.password,10,function(err,hash){
          user.password_hash = hash;
          res();
          })
        }; 
    });
  });
  return User;
};