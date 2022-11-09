import { ListToolsController } from './list-tools.controller';
import { ListToolsService } from './list-tools.service';
import { MongooseToolRepository } from '../../../repositories/implementations/MongooseToolRepository';

const mongooseToolsRepository = new MongooseToolRepository();

const listToolsService = new ListToolsService(mongooseToolsRepository);

export const listToolsController = new ListToolsController(listToolsService);
