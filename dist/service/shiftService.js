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
exports.ShiftService = void 0;
const shiftModel_1 = require("../models/shiftModel");
class ShiftService {
    getShiftDetails(employeeId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield shiftModel_1.Shift.findAll({ where: { employeeId } });
        });
    }
}
exports.ShiftService = ShiftService;
//# sourceMappingURL=shiftService.js.map