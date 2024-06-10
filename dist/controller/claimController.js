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
exports.generateReport = exports.newclaim = void 0;
const claimService_1 = require("../service/claimService");
const claimservice = new claimService_1.ClaimService();
const generatereport = new claimService_1.GenerateReport();
const newclaim = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const claim = yield claimservice.registerclaim(req.body);
        res.json(claim);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});
exports.newclaim = newclaim;
const generateReport = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const report = yield generatereport.cangeneratereport();
        res.json(report);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});
exports.generateReport = generateReport;
//# sourceMappingURL=claimController.js.map