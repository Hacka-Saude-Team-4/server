import { Request, Response } from 'express';
import { User } from '../../entity/User';

export default async (req: Request, res: Response) => {
	try {
		// De-structure child ID
		const { userId } = req.payload as JWTPayload;

		// Get child challenges
		const child = await User.findOne({
			where: { id: userId },
			relations: ['challenges'],
		});

		res.status(200).json({
			msg: 'Listing all child challenges.',
			challenges: child.challenges,
		});
	} catch (err) {
		console.log('Error at listing challenges: ', err);
		return res.status(500).json({ msg: 'Error at add challenge', err });
	}
};
