import { NextFunction, Request, Response } from 'express';
import { OptionalObjectSchema } from 'yup/lib/object';

export function Validation(schema: OptionalObjectSchema<any>) {
	return async (req: Request, res: Response, next: NextFunction) => {
		try {
			const resource = {
				...req.query,
				...req.body,
			};
			await schema.validate(resource, { abortEarly: true });
			next();
		} catch (error) {
			res.status(400).json(error);
		}
	};
}
