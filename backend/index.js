import dotenv from "dotenv";
import express from "express";
import path from "path";
import cors from "cors";
import cookieParser from "cookie-parser";

import connectDb from './src/lib/database_initiated.js';
import AuthRouter from './src/routes/auth.route.js';
import SkillRouter from './src/routes/skills.route.js'
import ConnectionRequest from './src/routes/request.route.js'
import MessageRouter from './src/routes/message.route.js'
import { app,server,io } from "./src/lib/socket.js";


dotenv.config();


const PORT = process.env.PORT || 5000;


app.use(express.json({ limit: '10mb' }));
app.use(cors({ credentials: true, origin: process.env.CLIENT_URL  || 'http://localhost:5173' }));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true, limit: '10mb' }));


app.use('/api/auth', AuthRouter);
app.use('/api/skills',SkillRouter);
app.use('/api/request',ConnectionRequest);
app.use('/api/messages',MessageRouter);

// Server
server.listen(PORT, () => {
  console.log(`App successfully running on port ${PORT}`);
  connectDb();
});
