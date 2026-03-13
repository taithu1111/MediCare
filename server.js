import express from 'express';
import cors from 'cors';
import 'dotenv/config';

import { clerkMiddleware } from '@clerk/express'
import { connectDB } from './config/db.js';

const app = express();
const PORT = 4000;

// Middleware
app.use(cors());
app.use(clerkMiddleware());
app.use(express.json({limit: '20mb' }));
app.use(express.urlencoded({ limit: '20mb', extended: true }));

//db
connectDB();

// Routes
app.get('/', (req, res) => {
    res.send('Api working!');
});

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});