import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

export default async (req: Request, res: Response, next: NextFunction) => {
	const authorization = req.headers['authorization'];

	try {
		if (!authorization) {
			res.status(400).json({ error: 'No token.' });
		}

		const token = authorization.split(' ')[1];
		const payload = verify(token, process.env.ACCESS_TOKEN_SECRET as string);
		req.payload = payload;

		// Next middleware/route endpoint
		next();
	} catch (err) {
		res.status(500).json(err);
	}
};
