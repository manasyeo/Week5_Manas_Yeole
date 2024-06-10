"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClaimRoute = void 0;
const express_1 = require("express");
const claimController_1 = require("../controller/claimController");
const claimController_2 = require("../controller/claimController");
const router = (0, express_1.Router)();
exports.ClaimRoute = router;
router.post('/claim', claimController_1.newclaim);
router.get('/generatereport', claimController_2.generateReport);
//# sourceMappingURL=claimRoute.js.map