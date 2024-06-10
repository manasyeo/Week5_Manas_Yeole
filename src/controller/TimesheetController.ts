import express,{Request,Response} from 'express';
import { TimesheetService } from '../service/TimesheetService';


const timesheetservice = new TimesheetService();

export const timesheet = async(req:Request,res:Response)=>{
    try{
        const newtimesheet = await timesheetservice.registertimesheet(req.body);
        res.json(newtimesheet); 
    }
    catch(error){
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}