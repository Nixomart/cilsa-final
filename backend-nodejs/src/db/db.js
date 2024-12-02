import Sequelize from "sequelize";

export const sequelize = new Sequelize(
  "todolist",
  "postgres",
  "root", 
  {
    host: "localhost",
    dialect: "postgres",
  }
);