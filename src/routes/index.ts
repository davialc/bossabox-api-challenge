import express from 'express';
import { toolsRouter } from './tools.routes';

export const router = express.Router();

router.use('/tools', toolsRouter);
