const Sequelize = require('sequelize');
require('dotenv').config(); 

module.exports = new Sequelize(
  process.env.DATABASE,
  process.env.USER_DB,
  process.env.PASSWORD_DB,
  {
    host: process.env.HOST_DB,
    port: process.env.PORT_DB,
    dialect: "postgres",
    dialectOptions: {
      ssl: true
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
    define: {
      timestamps: true,
    },
    logging: false,
  }
);