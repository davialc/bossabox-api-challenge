import { NextFunction, Request, Response } from 'express';
import { HttpException } from '../utils/HttpException';

export async function ExceptionHandler(
	error: HttpException,
	req: Request,
	res: Response,
	next: NextFunction
) {
	const statusCode = error.statusCode ?? 500;
	const message = error.statusCode ? error.message : 'Internal server error';
	return res.status(statusCode).json({ message });
}
