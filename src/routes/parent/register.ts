import { Request, Response } from 'express';
import { Parent } from '../../entity/Parent';
import { getRepository } from 'typeorm';

interface ParentCredentials {
	email: string;
	password: string;
}

export default async (req: Request, res: Response) => {
	try {
		// Get data from request
		const { email, password }: ParentCredentials = req.body;

		// Check if user already exists
		let parent = await Parent.findOne({ where: { email } });
		if (parent) {
			// If parent already exists
			return res
				.status(409)
				.json({ msg: 'User already exists. Try signing in.' });
		} else {
			// Create a new instance of Parent
			parent = new Parent();
			parent.email = email;
			parent.password = password;

			// Save parent to DB
			const parentsRepo = getRepository(Parent);
			await parentsRepo.save(parent);
			res.status(200).json({ msg: 'Parent added successfully.', parent });
		}

		// else: If user does not exist yet, create a new one
	} catch (err) {
		console.log('Error at user register: ', err);
		return res.status(500).json({ msg: 'Error at user register', err });
	}
};
