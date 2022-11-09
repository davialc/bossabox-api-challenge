import express from 'express';
import { router } from './routes/index';
import { ExceptionHandler } from './middlewares/ExceptionHandler';

export const app = express();

app.use(express.json());
app.use(router);
app.use(ExceptionHandler);
