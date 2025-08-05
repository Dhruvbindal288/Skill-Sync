import express from 'express';
const router = express.Router();
import { signUpuser,loginUser,logoutUser,checkAuth } from '../controllers/auth.controller.js';
import {protectRoute} from '../middlewares/auth.middleware.js';
router.post('/signup',signUpuser)
router.post('/login',loginUser)
router.get('/logout',logoutUser)
router.get('/check',protectRoute,checkAuth)

export default router;
