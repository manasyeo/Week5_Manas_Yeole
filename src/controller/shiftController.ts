import { Request, Response } from 'express';
import { ShiftService } from '../service/shiftService';
import jwt from 'jsonwebtoken';
import {JWT_SECRET} from '../service/authService'
const shiftService = new ShiftService();

export const getShiftByEmployeeId = async (req: Request, res: Response) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) {
            return res.json({ message: 'Unauthorized' });
        }

        const decoded = jwt.verify(token, JWT_SECRET) as { id: string };
        const employeeId = decoded.id;

        const shifts = await shiftService.getShiftDetails(employeeId);
        res.json(shifts);
    } catch (error) {
        console.error(error);
        res.json({ message: 'Internal server error' });
    }
};
