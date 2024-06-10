"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateExcel = void 0;
const xlsx_1 = __importDefault(require("xlsx"));
const generateExcel = (reportData) => {
    const wb = xlsx_1.default.utils.book_new();
    const ws = xlsx_1.default.utils.json_to_sheet(reportData);
    xlsx_1.default.utils.book_append_sheet(wb, ws, 'Report');
    return xlsx_1.default.write(wb, { type: 'buffer', bookType: 'xlsx' });
};
exports.generateExcel = generateExcel;
//# sourceMappingURL=excelUtils.js.map