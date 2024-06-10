import { Request,Response } from "express";
import { EmployeeService } from "../service/employeeService";


const employeeService = new EmployeeService();


    export const registeremployee= async(req:Request,res:Response) => {
        try{
            const newemployee = await employeeService.registerEmployee(req.body);
            res.json(newemployee);
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
          }
    }
