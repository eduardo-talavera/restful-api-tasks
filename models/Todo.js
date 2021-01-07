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
    updatedBy: {
      type: DataTypes.STRING,
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
      type: DataTypes.STRING(300)
    },
    completed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
  },
  { }
);

module.exports = Todo;
