import dotenv from 'dotenv';
dotenv.config();

import http from 'http';
import cors  from 'cors'
import express from 'express'; 
import session from 'express-session';
import { gameRoutes } from './routes/game.route';

const app = express();
const server = http.createServer(app);

app.use(
    session({
        secret: 'mySecretKey', //TODO - Replace with a key from a process env
        resave: false,
        saveUninitialized: true,
        cookie: {
            maxAge: 1000 * 60 * 60 // 1 hour expiration
        }
    })
);

app.use(cors({ origin: 'http://localhost:4200', credentials: true }));
app.use(express.json());
app.use('/api', gameRoutes);

export { app, server };