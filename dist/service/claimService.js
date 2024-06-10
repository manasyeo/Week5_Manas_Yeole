"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenerateReport = exports.ClaimService = void 0;
const claimModel_1 = require("../models/claimModel");
const shiftModel_1 = require("../models/shiftModel");
const employeeregModel_1 = require("../models/employeeregModel");
class ClaimService {
    registerclaim(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const newclaim = yield claimModel_1.Claim.create(data);
            return newclaim;
        });
    }
}
exports.ClaimService = ClaimService;
class GenerateReport {
    cangeneratereport() {
        return __awaiter(this, void 0, void 0, function* () {
            const generate = yield claimModel_1.Claim.findAll({ where: { key: 'CanGenerateReport' } });
            if (!generate) {
                throw new Error('You have not permission to generate report');
            }
            try {
                // Step 1: Fetch all shifts
                const shifts = yield shiftModel_1.Shift.findAll();
                // Step 2: Calculate total actual hours per employee
                const actualHoursMap = new Map();
                for (const shift of shifts) {
                    const { employeeId, actualHours, startTime } = shift;
                    if (!actualHoursMap.has(employeeId)) {
                        actualHoursMap.set(employeeId, 0);
                    }
                    actualHoursMap.set(employeeId, actualHoursMap.get(employeeId) + (actualHours !== null && actualHours !== void 0 ? actualHours : 0));
                }
                // Step 3: Fetch all employees and their assigned hours
                const employees = yield employeeregModel_1.Employee.findAll();
                const assignedHoursMap = new Map();
                for (const employee of employees) {
                    const { id, assignedShiftHours } = employee;
                    assignedHoursMap.set(id, assignedShiftHours);
                }
                // Step 4: Generate the report
                const reports = [];
                for (const shift of shifts) {
                    const { employeeId, startTime } = shift;
                    const totalActualHours = actualHoursMap.get(employeeId) || 0;
                    const totalAssignedHours = assignedHoursMap.get(employeeId) || 0;
                    reports.push({ employeeId, totalAssignedHours, totalActualHours, date: startTime, time: startTime.toLocaleTimeString() });
                }
                // Step 5: Return the report
                return reports;
            }
            catch (error) {
                console.error('Error generating report:', error);
                throw new Error('Failed to generate report');
            }
        });
    }
}
exports.GenerateReport = GenerateReport;
//# sourceMappingURL=claimService.js.map