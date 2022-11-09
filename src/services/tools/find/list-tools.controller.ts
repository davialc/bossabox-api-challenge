import { Request, Response } from 'express';
import { ListToolsDTO } from './list-tools.dto';
import { FindToolsService } from './list-tools.service';

export class ListToolsController {
	constructor(private findToolsService: FindToolsService) {}

	async execute(req: Request, res: Response) {
		const { title }: ListToolsDTO = req.body;
		const result = await this.findToolsService.handle(title);
		res.json(result);
	}
}
