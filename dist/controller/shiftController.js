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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getShiftByEmployeeId = void 0;
const shiftService_1 = require("../service/shiftService");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authService_1 = require("../service/authService");
const shiftService = new shiftService_1.ShiftService();
const getShiftByEmployeeId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
        if (!token) {
            return res.json({ message: 'Unauthorized' });
        }
        const decoded = jsonwebtoken_1.default.verify(token, authService_1.JWT_SECRET);
        const employeeId = decoded.id;
        const shifts = yield shiftService.getShiftDetails(employeeId);
        res.json(shifts);
    }
    catch (error) {
        console.error(error);
        res.json({ message: 'Internal server error' });
    }
});
exports.getShiftByEmployeeId = getShiftByEmployeeId;
//# sourceMappingURL=shiftController.js.map