import { Request, Response } from 'express';
import { User } from '../../entity/User';
import { getRepository } from 'typeorm';

interface ParentAditionalInfo {
	name: string;
	birthdate: Date;
	gender: string;
	relationship: string;
	height: number;
	weight: number;
	diseases: string;
}

export default async (req: Request, res: Response) => {
	try {
		// De-structure new user info
		const {
			name,
			birthdate,
			gender,
			relationship,
			height,
			weight,
			diseases,
		}: ParentAditionalInfo = req.body;

		// Identify user
		const { userId } = req.payload as JWTPayload;
		const parent = await User.findOne({ where: { id: parseInt(userId) } });
		parent.name = name;
		parent.birthdate = birthdate;
		parent.gender = gender;
		parent.relationship = relationship;
		parent.height = height;
		parent.weight = weight;
		parent.diseases = diseases;

		// Update parent model
		const userRepo = getRepository(User);
		await userRepo.save(parent);
		res.status(200).json({ msg: 'User updated successfully.', parent });
	} catch (err) {
		console.log('Error at user additional info update: ', err);
		return res
			.status(500)
			.json({ msg: 'Error at user additional info update', err });
	}
};
