import express,{Request,Response} from 'express';
import { ClaimService ,GenerateReport} from '../service/claimService';


const claimservice = new ClaimService();
const generatereport = new GenerateReport();

export const newclaim = async(req:Request,res:Response)=>{
    try{
        const claim = await claimservice.registerclaim(req.body);
        res.json(claim); 
    }
    catch(error){
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export const generateReport = async (req: Request, res: Response) => {
    try {
        const report = await generatereport.cangeneratereport();
        res.json(report);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
      }
};