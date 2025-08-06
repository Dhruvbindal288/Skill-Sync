import express from 'express';
import Skill from '../models/skill.models.js'
import { addSkills } from '../controllers/skills.controller.js';
const router=express.Router();


router.post('/skills',addSkills)
export default router;