import {Router} from 'express';
import { registeremployee } from '../controller/employeeregController';

const router = Router();

router.post('/register', registeremployee);

export { router as EmployeeRoute };