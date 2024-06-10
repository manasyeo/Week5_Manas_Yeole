"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const employeeregRoutes_1 = require("./routes/employeeregRoutes");
const authRoutes_1 = require("./routes/authRoutes");
const shiftRoutes_1 = require("./routes/shiftRoutes");
const TimesheetRoutes_1 = require("./routes/TimesheetRoutes");
const claimRoute_1 = require("./routes/claimRoute");
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.use('/', employeeregRoutes_1.EmployeeRoute);
app.use('/', authRoutes_1.authRoutes);
app.use('/', shiftRoutes_1.ShiftRoute);
app.use('/', TimesheetRoutes_1.TimesheetRoute);
app.use('/', claimRoute_1.ClaimRoute);
app.listen(port, () => {
    console.log(` Hii we are comfortable in NodeJS `);
});
//# sourceMappingURL=app.js.map