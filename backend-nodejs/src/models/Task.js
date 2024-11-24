import { DataTypes } from "sequelize";
import { sequelize } from "../db/db.js";

export const Task = sequelize.define(
  "task",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.ENUM("pendiente", "asignado", "terminado"),
    },
    description: {
      type: DataTypes.STRING,
      defaultValue: "asignado",
    },
  },
  {
    timestamps: false,
  }
);