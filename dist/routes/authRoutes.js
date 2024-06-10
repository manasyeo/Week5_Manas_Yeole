"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRoutes = void 0;
// routes/authRoutes.ts
const express_1 = __importDefault(require("express"));
const authController_1 = require("../controller/authController");
const authController_2 = require("../controller/authController");
const router = express_1.default.Router();
exports.authRoutes = router;
router.post('/login', authController_1.login);
router.post('/logout', authController_2.logout);
//# sourceMappingURL=authRoutes.js.map