import express from "express";
import { protectRoute } from "../middlewares/auth.middleware.js";
import { updateSkills,deleteSkills } from "../controllers/skill.controller.js";
const router=express.Router();

router.put('/updateSkill',protectRoute,updateSkills);
router.delete('/deleteSkill',protectRoute,deleteSkills);


export default router;