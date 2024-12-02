import { DataTypes } from "sequelize";
import { sequelize } from "../db/db.js";
import { User } from "./User.js";

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
    user_id:{
      type: DataTypes.INTEGER,
      references: {
        model: 'users',
        key: 'id'
      }
    }
  },
  {
    timestamps: false,
  }
);
Task.hasOne(User, {foreignKey: 'user_id', sourceKey: 'id'});