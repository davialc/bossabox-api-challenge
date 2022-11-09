import { Request, Response } from 'express';
import { DeleteToolsDTO } from './delete-tools.dto';
import { DeleteToolsService } from './delete-tools.service';

export class DeleteToolsController {
	constructor(private deleteToolsService: DeleteToolsService) {}

	async execute(req: Request, res: Response) {
		const { id }: DeleteToolsDTO = req.body;
		const result = await this.deleteToolsService.handle(id);
		res.status(204).json(result);
	}
}
