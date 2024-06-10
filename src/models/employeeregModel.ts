import { DataTypes, Model } from 'sequelize';
import {sequelize} from '../postgresDB/pgConfig'

export interface EmployeeAttributes {
  id: string;
  name: string;
  email: string;
  password: string;
  assignedShiftHours: number;
  role : string,
  createdAt:Date,
  updatedAt:Date,
}



class Employee extends Model<EmployeeAttributes> implements EmployeeAttributes {
  public id!: string;
  public name!: string;
  public email!: string;
  public password!: string;
  public assignedShiftHours!: number;
  public role!: string; 
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Employee.init({
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  assignedShiftHours: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'Employee',
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
}, {
  sequelize,
  tableName: 'employees',
  timestamps: true,
});

export {Employee};
