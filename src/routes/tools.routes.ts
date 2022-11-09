import express from 'express';
import { Validation } from '../middlewares/Validation';
import { CreateToolsSchema } from '../validation/tools/create-tools.validation';
import { DeleteToolsSchema } from '../validation/tools/delete-tools.validation';

import { createToolsController } from '../services/tools/create';
import { deleteToolsController } from '../services/tools/delete';

export const toolsRouter = express.Router();

toolsRouter.post(
	'/create',
	Validation(CreateToolsSchema),
	createToolsController.execute
);

toolsRouter.delete(
	'/delete',
	Validation(DeleteToolsSchema),
	deleteToolsController.execute
);

toolsRouter.get(
	'/find',
	Validation(DeleteToolsSchema),
	deleteToolsController.execute
);
