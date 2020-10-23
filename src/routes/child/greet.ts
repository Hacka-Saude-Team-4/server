import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { User } from '../../entity/User';

export default async (req: Request, res: Response) => {
	console.log('Inserting a new user into the database...');
	const user = new User();
	user.firstName = 'Timber';
	user.lastName = 'Saw';
	user.age = 25;

	const userRepo = getRepository(User);
	await userRepo.save(user);
	console.log('Saved a new user with id: ' + user.id);

	console.log('Loading users from the database...');
	const users = await userRepo.find();
	console.log('Loaded users: ', users);

	res.send('User added successfully, here are all of them:');
};
