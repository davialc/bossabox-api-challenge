import { ToolsRepository } from '../../../repositories/ToolsRepository';

export class DeleteToolsService {
	constructor(private toolsRepository: ToolsRepository) {}

	async handle(id: string) {
		return await this.toolsRepository.delete(id);
	}
}
