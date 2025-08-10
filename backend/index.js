import dotenv from "dotenv";
import express from "express";
import path from "path";
import cors from "cors";
import cookieParser from "cookie-parser";

import connectDb from './src/lib/database_initiated.js';
import AuthRouter from './src/routes/auth.route.js';



dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;


app.use(express.json());
app.use(cors({ credentials: true, origin: process.env.CLIENT_URL  || 'http://localhost:5173' }));
app.use(cookieParser());



app.use('/api/auth', AuthRouter);

// Server
app.listen(PORT, () => {
  console.log(`App successfully running on port ${PORT}`);
  connectDb();
});
