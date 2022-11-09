import { describe, expect, it } from 'vitest';
import { databaseConnect } from '../../../database';
import { ListToolsService } from './list-tools.service';

await databaseConnect();

describe('List tools', () => {
	it('Should be able to list all tools', async () => {
		const listToolsService = new ListToolsService();
		const tools = await listToolsService.list();
		expect(tools).toEqual(expect.arrayContaining(tools));
	});

	it('Should be able to list tools by tag', async () => {
		const listToolsService = new ListToolsService();
		const tag = 'new-tool';
		const tools = await listToolsService.listByTag(tag);
		expect(tools).toEqual(expect.arrayContaining(tools));
	});
});
