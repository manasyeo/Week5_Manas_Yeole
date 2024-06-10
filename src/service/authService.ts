import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Employee } from '../models/employeeregModel';
import { Shift,ShiftAttributes } from '../models/shiftModel';
import { NonNullFindOptions } from 'sequelize';
import { Op } from 'sequelize';

export const JWT_SECRET = 'C56927AB6CFA9DE3198231EC893AC';


class AuthService{
    public async login(email:string,password:string){
        const employee = await Employee.findOne({where:{email}});
        if(!employee){
            throw new Error('Invalid Email or Password');
        }
        const isPasswordValid = await bcrypt.compare(password,employee.password);
        if(!isPasswordValid){
            throw new Error('Invalid Email or Password');
        }

        const token = jwt.sign({id:employee.id,role:employee.role},JWT_SECRET,{expiresIn:'1h'});


        const shift = await Shift.create({
            employeeId: employee.id,
            startTime:new Date(),
        });

        return {shift,token};
        
    }
    public async logout(employeeId: string) {
        const shift = await Shift.findOne({
            where: {
                employeeId: employeeId,
                endTime:{
                    [Op.is]: null,
                },
            }as NonNullFindOptions<ShiftAttributes>['where'],
    });
    if (!shift) {
        throw new Error('No active shift found for the employee');
    }
    shift.endTime = new Date();
        shift.actualHours = (shift.endTime.getTime() - shift.startTime.getTime()) / 3600000; // Calculate actual hours
        await shift.save();

        return shift;
}
}

export { AuthService };