const { DataTypes } = require("sequelize");
const db = require("../config/db");


const Todo = db.define(
  "todo",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    updatedByUserId: {
      type: DataTypes.INTEGER,
    },
    userAssignedId: {
      type: DataTypes.INTEGER,
    },     
    title: {
      type: DataTypes.STRING(150),
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "the title can not be empty",
        }
      }
    },
    description: {
      type: DataTypes.STRING(300),
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "the description can not be empty",
        }
      },
    },
    completed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
  },
  { }
);

module.exports = Todo;
