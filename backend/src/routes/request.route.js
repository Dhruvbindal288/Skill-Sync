import express from 'express'
import { sendRequest ,respondToRequest,getAllRequest} from '../controllers/request.controller.js';
import {protectRoute} from '../middlewares/auth.middleware.js'

 const router=express.Router();

router.post('/send-request/:id',protectRoute,sendRequest);
router.post('/respond-request/:id',protectRoute,respondToRequest);
router.get("/all-request",protectRoute,getAllRequest)


 export default router;