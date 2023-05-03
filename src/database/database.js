import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  "comentariosdb", // db name
  "postgres", // username
  "0000", // password
  {
    host: "localhost",
    dialect: "postgres",
  }
);