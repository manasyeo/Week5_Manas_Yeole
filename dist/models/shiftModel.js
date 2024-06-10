"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shift = void 0;
// models/shiftModel.ts
const sequelize_1 = require("sequelize");
const pgConfig_1 = require("../postgresDB/pgConfig");
const employeeregModel_1 = require("./employeeregModel");
class Shift extends sequelize_1.Model {
}
exports.Shift = Shift;
Shift.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
    },
    employeeId: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
        references: {
            model: employeeregModel_1.Employee,
            key: 'id',
        },
    },
    startTime: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize_1.DataTypes.NOW,
    },
    endTime: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true,
    },
    actualHours: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: true,
        defaultValue: 0,
    },
}, {
    sequelize: pgConfig_1.sequelize,
    tableName: 'shifts',
    timestamps: false,
});
//# sourceMappingURL=shiftModel.js.map