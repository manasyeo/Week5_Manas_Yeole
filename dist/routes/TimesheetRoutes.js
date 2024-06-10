"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimesheetRoute = void 0;
const express_1 = require("express");
const TimesheetController_1 = require("../controller/TimesheetController");
const router = (0, express_1.Router)();
exports.TimesheetRoute = router;
router.post('/timesheet', TimesheetController_1.timesheet);
//# sourceMappingURL=TimesheetRoutes.js.map