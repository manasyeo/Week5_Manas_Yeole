"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeRoute = void 0;
const express_1 = require("express");
const employeeregController_1 = require("../controller/employeeregController");
const router = (0, express_1.Router)();
exports.EmployeeRoute = router;
router.post('/register', employeeregController_1.registeremployee);
//# sourceMappingURL=employeeregRoutes.js.map