import express from 'express';
const router = express.Router();
import { signUpuser,loginUser,logoutUser,checkAuth,updateProfile } from '../controllers/auth.controller.js';
import {protectRoute} from '../middlewares/auth.middleware.js';
router.post('/signup',signUpuser)
router.post('/login',loginUser)
router.get('/logout',logoutUser)
router.get('/check',protectRoute,checkAuth)
router.post('/update-profile',protectRoute,updateProfile)

export default router;
