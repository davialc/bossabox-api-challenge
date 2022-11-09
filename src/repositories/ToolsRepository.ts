import { Tool } from '../entities/Tool';

export interface ToolsRepository {
	create(tool: Tool): Promise<Tool>;
	findById(id: string): Promise<Tool>;
	findByTitle(title: string): Promise<Tool>;
	delete(id: string): Promise<undefined>;
}
