import { Router } from "express";
import {newclaim} from '../controller/claimController'
import {generateReport}from '../controller/claimController';

const router = Router();

router.post('/claim',newclaim);
router.get('/generatereport',generateReport);


export { router as ClaimRoute };