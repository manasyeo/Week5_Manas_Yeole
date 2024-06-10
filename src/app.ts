import express,{Request,Response} from 'express';
import { EmployeeRoute } from './routes/employeeregRoutes';
import { authRoutes } from './routes/authRoutes';
import { ShiftRoute } from './routes/shiftRoutes';
import { TimesheetRoute } from './routes/TimesheetRoutes';
import { ClaimRoute } from './routes/claimRoute';

const app = express();
const port = 3000;


app.use(express.json());

app.use('/',EmployeeRoute);
app.use('/',authRoutes);
app.use('/',ShiftRoute);
app.use('/',TimesheetRoute);
app.use('/',ClaimRoute);


app.listen(port, ()=> {
    console.log(` Hii we are comfortable in NodeJS `);

})