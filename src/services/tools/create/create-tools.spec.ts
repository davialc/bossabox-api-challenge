import mongoose from 'mongoose';
import { describe, expect, it } from 'vitest';
import { databaseConnect } from '../../../database';
import { CreateToolsDTO } from './create-tools.dto';
import { Tool } from '../../models/Tool';
import { CreateToolsService } from '../../services/tools/create-tools.service';

await databaseConnect();

describe('Create an tool', () => {
	it('Should be able to create a tool', async () => {
		await mongoose.connection.db.dropDatabase();
		const tool: CreateToolsDTO = {
			description: 'This is a new tool',
			link: 'https://new-tool-link.com',
			tags: ['new-tool', 'tool'],
			title: 'New tool',
		};
		const createTool = new CreateToolsService();
		const createdTool = await createTool.handle(tool);
		expect(createdTool).toBeInstanceOf(Tool);
	});

	it("Shouldn't be able to create a tool with a title that already exists", async () => {
		await mongoose.connection.db.dropDatabase();
		const createTool = new CreateToolsService();
		await createTool.handle({
			description: 'This is the second tool',
			link: 'https://new-tool-link.com',
			tags: ['new-tool', 'tool'],
			title: 'New tool',
		});
		expect(async () => {
			await createTool.handle({
				description: 'This is the second tool',
				link: 'https://new-tool-link.com',
				tags: ['new-tool', 'tool'],
				title: 'New tool',
			});
		}).toThrow;
	});
});
