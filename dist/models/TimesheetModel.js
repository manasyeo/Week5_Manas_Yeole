"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Timesheet = void 0;
const sequelize_1 = require("sequelize");
const pgConfig_1 = require("../postgresDB/pgConfig");
const employeeregModel_1 = require("./employeeregModel");
const shiftModel_1 = require("./shiftModel");
class Timesheet extends sequelize_1.Model {
}
exports.Timesheet = Timesheet;
Timesheet.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        primaryKey: true,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
    },
    employeeId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        references: {
            model: employeeregModel_1.Employee,
            key: 'id',
        },
    },
    shiftId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
        references: {
            model: shiftModel_1.Shift,
            key: 'id',
        },
    },
    projectName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    taskName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    fromDate: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    toDate: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
}, {
    sequelize: pgConfig_1.sequelize,
    tableName: 'timesheets',
    timestamps: false,
});
//# sourceMappingURL=TimesheetModel.js.map