// routes/authRoutes.ts
import express from 'express';
import { login } from '../controller/authController';
import {logout} from '../controller/authController';

const router = express.Router();

router.post('/login', login);
router.post('/logout', logout);

export {router as authRoutes};
