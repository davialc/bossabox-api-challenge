import { ToolsRepository } from '../../../repositories/ToolsRepository';

export class ListToolsService {
	constructor(private toolsRepository: ToolsRepository) {}

	async handle(title: string) {
		const tool = await this.toolsRepository.findByTitle(title);
		return tool;
	}
}
