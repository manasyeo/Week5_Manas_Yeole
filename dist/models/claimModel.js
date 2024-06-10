"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Claim = void 0;
// claimsModel.ts
const sequelize_1 = require("sequelize");
const pgConfig_1 = require("../postgresDB/pgConfig");
class Claim extends sequelize_1.Model {
}
exports.Claim = Claim;
Claim.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
    },
    key: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    value: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    EmployeeId: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'Employees',
            key: 'id',
        },
    },
}, {
    sequelize: pgConfig_1.sequelize,
    tableName: 'claims',
    timestamps: false
});
//# sourceMappingURL=claimModel.js.map