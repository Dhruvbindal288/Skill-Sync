import express from 'express'
import { sendMessage ,getMessages,getUserForSideBar} from '../controllers/message.controller.js';
import { protectRoute } from '../middlewares/auth.middleware.js';
const router=express.Router();


router.get('/get-messages/:id',protectRoute,getMessages)
router.post("/send-message/:id", protectRoute,sendMessage)
router.get("/sidebar-users",protectRoute,getUserForSideBar)

export default router;