import { Router } from "express";
import {timesheet} from '../controller/TimesheetController'

const router = Router();

router.post('/timesheet',timesheet);

export { router as TimesheetRoute };