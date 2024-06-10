"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShiftRoute = void 0;
const express_1 = __importDefault(require("express"));
const shiftController_1 = require("../controller/shiftController");
const router = express_1.default.Router();
exports.ShiftRoute = router;
router.get('/shifts/:employeeId', shiftController_1.getShiftByEmployeeId);
//# sourceMappingURL=shiftRoutes.js.map