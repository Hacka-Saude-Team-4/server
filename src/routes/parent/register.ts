import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Parent } from '../../entity/Parent';

export default async (req: Request, res: Response) => {
	console.log('Inserting a new user into the database...');
	const parent = new Parent();
	parent.email = 'test@parent.com';
	parent.password = 'bestdad';

	const parentsRepo = getRepository(Parent);
	await parentsRepo.save(parent);
	console.log('Saved a new user with id: ' + parent.id);

	console.log('Loading users from the database...');
	const parents = await parentsRepo.find(); // find all
	console.log('Loaded users: ', parents);

	res.send('User added successfully, here are all of them:');
};
