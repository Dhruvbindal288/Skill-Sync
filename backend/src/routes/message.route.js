import express from 'express'
import { sendMessage ,getMessages} from '../controllers/message.controller.js';
import { protectRoute } from '../middlewares/auth.middleware.js';
const router=express.Router();


router.get('/get-messages/:id',getMessages)
router.post("/send-message/:id", protectRoute,sendMessage)

export default router;