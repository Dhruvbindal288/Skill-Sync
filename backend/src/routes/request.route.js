import express from 'express'
import { sendRequest } from '../controllers/request.controller.js';
import {protectRoute} from '../middlewares/auth.middleware.js'

 const router=express.Router();

router.post('/send-request',protectRoute,sendRequest);


 export default router;