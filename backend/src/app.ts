import express from 'express';
import { config } from "dotenv";
import morgan from 'morgan';
import appRouter from './routes/index.js';

config();

const app = express();

// defines a middleware; this reads what the user sends
app.use(express.json()); 
// remove it in production
app.use(morgan("dev"));

app.use("/api/v1", appRouter); // after api/v1, will handle approuter after

export default app;