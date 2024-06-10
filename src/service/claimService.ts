import { Claim,ClaimAttributes } from "../models/claimModel";
import { Shift } from "../models/shiftModel";
import { Employee } from "../models/employeeregModel";


export class ClaimService{
    public async registerclaim(data:ClaimAttributes):Promise<Claim>{
        const newclaim = await Claim.create(data);
        return newclaim;

  
    }
}

interface EmployeeReport {
    employeeId: string;
    totalAssignedHours: number;
    totalActualHours: number;
    date: Date;
    time: string;
}

export class GenerateReport{
  
    public async cangeneratereport(): Promise<EmployeeReport[]>{
        const generate = await Claim.findAll({where:{key:'CanGenerateReport'}});
        if(!generate){
            throw new Error ('You have not permission to generate report');
        }
        try {
            // Step 1: Fetch all shifts
            const shifts = await Shift.findAll();

            // Step 2: Calculate total actual hours per employee
            const actualHoursMap: Map<string, number> = new Map();
            for (const shift of shifts) {
                const { employeeId, actualHours,startTime } = shift;

                if (!actualHoursMap.has(employeeId)) {
                    actualHoursMap.set(employeeId, 0);
                }
                actualHoursMap.set(employeeId, actualHoursMap.get(employeeId)! + (actualHours ??0));
            }

            // Step 3: Fetch all employees and their assigned hours
            const employees = await Employee.findAll();
            const assignedHoursMap: Map<string, number> = new Map();
            for (const employee of employees) {
                const { id, assignedShiftHours } = employee;
                assignedHoursMap.set(id, assignedShiftHours);
            }

            // Step 4: Generate the report
            const reports: EmployeeReport[] = [];
            for (const shift of shifts) {
                const { employeeId, startTime } = shift;
                const totalActualHours = actualHoursMap.get(employeeId) || 0;
                const totalAssignedHours = assignedHoursMap.get(employeeId) || 0;
                
                reports.push({ employeeId, totalAssignedHours, totalActualHours,date: startTime, time: startTime.toLocaleTimeString()});
            }

            // Step 5: Return the report
            return reports;

            
        } catch (error) {
            console.error('Error generating report:', error);
            throw new Error('Failed to generate report');
        }
        
        
      
    }

}