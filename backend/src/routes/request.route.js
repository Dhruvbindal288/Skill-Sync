import express from 'express'
import { sendRequest ,respondToRequest} from '../controllers/request.controller.js';
import {protectRoute} from '../middlewares/auth.middleware.js'

 const router=express.Router();

router.post('/send-request/:id',protectRoute,sendRequest);
router.post('/respond-request/:id',protectRoute,respondToRequest);


 export default router;