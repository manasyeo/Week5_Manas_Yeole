import { Timesheet,TimesheetAttributes } from "../models/TimesheetModel";

export class TimesheetService{
    public async registertimesheet(data:TimesheetAttributes):Promise<Timesheet>{
        const registertime = await Timesheet.create(data);
        return registertime;
    }
}