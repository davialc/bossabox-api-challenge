import { Request, Response } from 'express';
import { CreateToolsDTO } from './create-tools.dto';
import { CreateToolsService } from './create-tools.service';

export class CreateToolsController {
	constructor(private createUserService: CreateToolsService) {}
	async execute(req: Request, res: Response) {
		const { description, link, tags, title }: CreateToolsDTO = req.body;
		const result = await this.createUserService.handle({
			description,
			link,
			tags,
			title,
		});
		res.status(201).json(result);
	}
}
