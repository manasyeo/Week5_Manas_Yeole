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
exports.registeremployee = void 0;
const employeeService_1 = require("../service/employeeService");
const employeeService = new employeeService_1.EmployeeService();
const registeremployee = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newemployee = yield employeeService.registerEmployee(req.body);
        res.json(newemployee);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});
exports.registeremployee = registeremployee;
//# sourceMappingURL=employeeregController.js.map