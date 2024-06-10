import express from 'express';
import { getShiftByEmployeeId } from '../controller/shiftController';

const router = express.Router();


router.get('/shifts/:employeeId', getShiftByEmployeeId);

export {router as ShiftRoute};
