import {Employee,EmployeeAttributes} from '../models/employeeregModel';
import bcrypt from 'bcrypt';


export class EmployeeService{
    public async registerEmployee(data:EmployeeAttributes):Promise<Employee> {
        const hashpassword = await bcrypt.hash(data.password,10);
        const employee= await Employee.create({...data,password:hashpassword});
        return employee;
    }
}