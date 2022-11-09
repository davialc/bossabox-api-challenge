import { MongooseToolRepository } from '../../../repositories/implementations/MongooseToolRepository';
import { CreateToolsService } from './create-tools.service';
import { CreateToolsController } from './create-tools.controller';

const mongooseToolsRepository = new MongooseToolRepository();

const createToolsService = new CreateToolsService(mongooseToolsRepository);

export const createToolsController = new CreateToolsController(
	createToolsService
);
