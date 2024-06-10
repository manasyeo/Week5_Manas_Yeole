import { DataTypes, Model } from 'sequelize';
import {sequelize} from '../postgresDB/pgConfig'
import { Employee } from './employeeregModel';
import { Shift } from './shiftModel';


export interface TimesheetAttributes {
  id: string;
  employeeId: string;
  shiftId: string;
  projectName: string;
  taskName: string;
  fromDate : Date;
  toDate:Date;

}



class Timesheet extends Model<TimesheetAttributes> implements TimesheetAttributes {
  public id!: string;
  public employeeId!: string;
  public shiftId!: string;
  public projectName!: string;
  public taskName!: string;
  public fromDate!: Date; 
  public toDate!: Date; 

}

Timesheet.init({
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  employeeId: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
        model: Employee,
        key: 'id',
    },
  },
  shiftId: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    references: {
        model: Shift,
        key: 'id',
    },
  },
  projectName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  taskName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fromDate: {
    type: DataTypes.DATE,
    allowNull: false,
    
  },
  toDate: {
    type: DataTypes.DATE,
    allowNull: false,
    
  },

}, {
  sequelize,
  tableName: 'timesheets',
  timestamps:false,
  
});

export {Timesheet};
