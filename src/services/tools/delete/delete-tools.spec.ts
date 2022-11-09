import mongoose from 'mongoose';
import { describe, expect, it } from 'vitest';
import { databaseConnect } from '../../../database';
import { CreateToolsDTO } from '../../dtos/tools/create-tools.dto';
import { Tool } from '../../models/Tool';
import { CreateToolsService } from './create-tools.service';
import { DeleteToolsService } from './delete-tools.service';

await databaseConnect();

describe('Delete an tool', () => {
	it('Should be able to delete a tool by id', async () => {
		await mongoose.connection.db.dropDatabase();
		const tool: CreateToolsDTO = {
			description: 'This is a new tool',
			link: 'https://new-tool-link.com',
			tags: ['new-tool', 'tool'],
			title: 'New tool',
		};
		const createTool = new CreateToolsService();
		const deleteTool = new DeleteToolsService();
		const createdTool = await createTool.handle(tool);
		const deletedTool = await deleteTool.handle(String(createdTool._id));
		expect(deletedTool).toBeInstanceOf(Tool);
	});
});
