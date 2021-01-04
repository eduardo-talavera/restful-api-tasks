const { DataTypes } = require("sequelize");
const db = require('../config/db');
const Todo = require('./Todo');
const bcrypt = require('bcrypt');

const User = db.define('user', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      validate: {
          notEmpty: {
              msg: 'The name is required'
          }
      }
  },
    email: {
        type: DataTypes.STRING(60),
        allowNull: false,
        validate:{
            isEmail: {
                msg : 'Add a valid email'
            },
            notEmpty: {
                msg: 'The email is required'
            }
        },
        unique: {
           args: true,
           msg: 'the email already exists'
        }
    },
    password: {
        type: DataTypes.STRING(60),
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'The password is required'
            }
        }
    },
    role: {
      type: DataTypes.STRING(60),
      allowNull: false,
      validate: {
          notEmpty: {
              msg: 'The role is required'
          }
      }
    } 
}, {
    hooks: {
        beforeCreate(user) {
           user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10) );
        }
    }

});

//custom methods

//prototipe insert functions in the objects
User.prototype.authenticate = function(password) {  
 return bcrypt.compareSync(password, this.password);
}

// creating the foreign key userId to tasks
User.hasMany(Todo);

module.exports = User;