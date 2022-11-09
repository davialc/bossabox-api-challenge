import { MongooseToolRepository } from '../../../repositories/implementations/MongooseToolRepository';
import { DeleteToolsController } from './delete-tools.controller';
import { DeleteToolsService } from './delete-tools.service';

const mongooseToolsRepository = new MongooseToolRepository();

export const createToolsService = new DeleteToolsService(
	mongooseToolsRepository
);

export const deleteToolsController = new DeleteToolsController(
	createToolsService
);
