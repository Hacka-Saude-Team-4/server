import { Request, Response } from 'express';
import { Reward } from '../../entity/Reward';

export default async (req: Request, res: Response) => {
	try {
		// De-structure parent ID
		const { userId } = req.payload as JWTPayload;

		// Get challenges assigned by parent
		const rewards = await Reward.find({
			where: { assignedBy: userId },
		});

		res.status(200).json({
			msg: 'Listing all child rewards.',
			rewards,
		});
	} catch (err) {
		console.log('Error at listing challenges: ', err);
		return res.status(500).json({ msg: 'Error at add challenge', err });
	}
};
