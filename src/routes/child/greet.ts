import { Request, Response } from 'express';

export default async (req: Request, res: Response) => {
	res.send('hiay there');
};
