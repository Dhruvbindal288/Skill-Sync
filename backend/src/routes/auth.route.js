import express from 'express';
const router = express.Router();
import { signUpuser,loginUser,logoutUser,checkAuth,updateProfile,completeprofile, deleteUser } from '../controllers/auth.controller.js';
import {protectRoute} from '../middlewares/auth.middleware.js';
router.post('/signup',signUpuser)
router.post('/login',loginUser)
router.get('/logout',logoutUser)
router.get('/check',protectRoute,checkAuth)
router.put('/update-profile',protectRoute,updateProfile)
router.post('/complete-profile',protectRoute,completeprofile)
router.delete('/deleteUser',protectRoute,deleteUser)
export default router;
