import express from "express";
import { protectRoute } from "../middlewares/auth.middleware";
const router=express.Router();

router.put('/updateSkill',protectRoute,updateSkills);
router.put('/deleteSkill',protectRoute,deleteSkills);


export default router;