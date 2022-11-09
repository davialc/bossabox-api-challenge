import { Tool } from '../../entities/Tool';
import { ToolsRepository } from '../ToolsRepository';
import { MongooseTool } from '../implementations/MongooseToolSchema';
import { HttpException } from '../../utils/HttpException';

export class MongooseToolRepository implements ToolsRepository {
	private tools = MongooseTool;

	async create({ description, id, link, tags, title }: Tool): Promise<Tool> {
		const result = await this.tools.create({
			description,
			id,
			link,
			tags,
			title,
		});
		const tool = new Tool({
			description: result.id,
			link: result.link,
			tags: result.tags,
			title: result.title,
		});
		return tool;
	}
	async findById(id: string): Promise<Tool> {
		const result = await this.tools.findById({
			id,
		});
		if (!result) {
			throw new HttpException(404, 'Tool not found');
		}
		const tool = new Tool({
			description: result.id,
			link: result.link,
			tags: result.tags,
			title: result.title,
		});
		return tool;
	}
	async delete(id: string): Promise<undefined> {
		await this.tools.findByIdAndDelete(id);
		return;
	}
	async findByTitle(title: string): Promise<Tool> {
		const result = await this.tools.findOne({
			title,
		});
		if (!result) {
			throw new HttpException(404, 'Tool not found');
		}
		const tool = new Tool({
			description: result.id,
			link: result.link,
			tags: result.tags,
			title: result.title,
		});
		return tool;
	}
}
