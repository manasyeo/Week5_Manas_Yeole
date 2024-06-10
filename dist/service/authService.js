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
exports.AuthService = exports.JWT_SECRET = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const employeeregModel_1 = require("../models/employeeregModel");
const shiftModel_1 = require("../models/shiftModel");
const sequelize_1 = require("sequelize");
exports.JWT_SECRET = 'C56927AB6CFA9DE3198231EC893AC';
class AuthService {
    login(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const employee = yield employeeregModel_1.Employee.findOne({ where: { email } });
            if (!employee) {
                throw new Error('Invalid Email or Password');
            }
            const isPasswordValid = yield bcrypt_1.default.compare(password, employee.password);
            if (!isPasswordValid) {
                throw new Error('Invalid Email or Password');
            }
            const token = jsonwebtoken_1.default.sign({ id: employee.id, role: employee.role }, exports.JWT_SECRET, { expiresIn: '1h' });
            const shift = yield shiftModel_1.Shift.create({
                employeeId: employee.id,
                startTime: new Date(),
            });
            return { shift, token };
        });
    }
    logout(employeeId) {
        return __awaiter(this, void 0, void 0, function* () {
            const shift = yield shiftModel_1.Shift.findOne({
                where: {
                    employeeId: employeeId,
                    endTime: {
                        [sequelize_1.Op.is]: null,
                    },
                },
            });
            if (!shift) {
                throw new Error('No active shift found for the employee');
            }
            shift.endTime = new Date();
            shift.actualHours = (shift.endTime.getTime() - shift.startTime.getTime()) / 3600000; // Calculate actual hours
            yield shift.save();
            return shift;
        });
    }
}
exports.AuthService = AuthService;
//# sourceMappingURL=authService.js.map