import { Request, Response } from 'express';
import { User } from '../../entity/User';
import { getRepository } from 'typeorm';

export default async (req: Request, res: Response) => {
	try {
		const { userId } = req.payload as JWTPayload;

		// Update parent model
		const parent = await User.findOne({
			where: { id: parseInt(userId) },
			relations: ['children'],
		});

		const userRepo = getRepository(User);
		await userRepo.save(parent);

		res
			.status(200)
			.json({
				msg: 'Listing all children for this parent.',
				children: parent.children,
			});
	} catch (err) {
		console.log('Error at add children: ', err);
		return res.status(500).json({ msg: 'Error at add children', err });
	}
};
