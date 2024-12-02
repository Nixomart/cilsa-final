import { DataTypes } from "sequelize";
import { sequelize } from "../db/db.js";

export const User = sequelize.define(
  "users",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
      defaultValue: "asignado",
    }
  },
  {
    timestamps: false,
  }
);