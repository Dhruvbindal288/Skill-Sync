import express from "express";
import { protectRoute } from "../middlewares/auth.middleware.js";
import { addSkills,deleteSkills, allUser } from "../controllers/skill.controller.js";
const router=express.Router();

router.put('/addSkill',protectRoute,addSkills);
router.delete('/deleteSkill',protectRoute,deleteSkills);
router.get('/getUsers',protectRoute,allUser)

export default router;