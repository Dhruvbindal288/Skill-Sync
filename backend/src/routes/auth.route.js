import express from 'express';
const router = express.Router();
import { signUpuser } from '../controllers/auth.controller.js';

router.post('/signup',signUpuser)

export default router;
