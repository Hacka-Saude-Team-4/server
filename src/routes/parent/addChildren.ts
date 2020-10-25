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
		// De-structure new child info
		const {
			name,
			birthdate,
			gender,
			relationship,
			height,
			weight,
			diseases,
		}: ParentAditionalInfo = req.body;

		// Create child
		const { userId } = req.payload as JWTPayload;
		let child = new User();
		child.userType = 'child';
		child.name = name;
		child.birthdate = birthdate;
		child.gender = gender;
		child.relationship = relationship;
		child.height = height;
		child.weight = weight;
		child.diseases = diseases;

		// Save child
		const userRepo = getRepository(User);
		await userRepo.save(child);

		// Update parent model
		const parent = await User.findOne({
			where: { id: parseInt(userId) },
			relations: ['children'],
		});
		parent.children = [...parent.children, child];
		await userRepo.save(parent);
		res.status(200).json({ msg: 'User updated successfully.', parent });
	} catch (err) {
		console.log('Error at add children: ', err);
		return res.status(500).json({ msg: 'Error at add children', err });
	}
};
