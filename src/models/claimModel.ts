// claimsModel.ts
import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../postgresDB/pgConfig'; 

interface ClaimAttributes {
    id: string;
    key: string;
    value: string;
    EmployeeId: string;
}



class Claim extends Model<ClaimAttributes> implements ClaimAttributes {
    public id!: string;
    public key!: string;
    public value!: string;
    public EmployeeId!: string;
}

Claim.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        key: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        value: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        EmployeeId: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: 'Employees', 
                key: 'id',
            },
        },
    },
    {
        sequelize,
        tableName: 'claims',
        timestamps:false
    }
);

export { Claim, ClaimAttributes };
