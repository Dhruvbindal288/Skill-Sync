import express from 'express';
const router = express.Router();
import { signUpuser,loginUser,logoutUser } from '../controllers/auth.controller.js';

router.post('/signup',signUpuser)
router.post('/login',loginUser)
router.get('/logout',logoutUser)

export default router;
