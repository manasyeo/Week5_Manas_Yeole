// models/shiftModel.ts
import { Model, DataTypes,Optional } from 'sequelize';
import { sequelize } from '../postgresDB/pgConfig';
import { Employee } from './employeeregModel';

interface ShiftAttributes {
    id: string;
    employeeId: string;
    startTime: Date;
    endTime?: Date;
    actualHours?: number; // This will be updated when the shift ends
}


interface ShiftCreationAttributes extends Optional<ShiftAttributes, 'id' > {}


class Shift extends Model<ShiftAttributes,ShiftCreationAttributes> implements ShiftAttributes {
    public id!: string;
    public employeeId!: string;
    public startTime!: Date;
    public endTime?: Date;
    public actualHours?: number;
}

Shift.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        employeeId: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: Employee,
                key: 'id',
            },
        },
        startTime: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        endTime: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        actualHours: {
            type: DataTypes.FLOAT,
            allowNull: true,
            defaultValue: 0,
        
        },
    },
    {
        sequelize,
        tableName:'shifts',
        timestamps:false,
    }
);

export { Shift, ShiftAttributes };
