import { Tool } from '../../../entities/Tool';
import { ToolsRepository } from '../../../repositories/ToolsRepository';
import { CreateToolsDTO } from './create-tools.dto';

export class CreateToolsService {
	constructor(private toolsRepository: ToolsRepository) {}

	async handle({ title, link, description, tags }: CreateToolsDTO) {
		const tool = new Tool({ description, link, tags, title });
		await this.toolsRepository.create(tool);
		return tool;
	}
}
