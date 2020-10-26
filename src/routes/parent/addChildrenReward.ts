import { Request, Response } from 'express';
import { User } from '../../entity/User';
import { getRepository } from 'typeorm';
import { Reward } from '../../entity/Reward';

interface ChallengeInfo {
	assignedTo: number;
	assignedToName: string;
	title: string;
	coins: number;
}

export default async (req: Request, res: Response) => {
	try {
		// De-structure parent ID
		const { userId } = req.payload as JWTPayload;

		// De-structure challenge info
		const {
			assignedTo,
			title,
			coins,
			assignedToName,
		}: ChallengeInfo = req.body;

		// Create the challenge
		let reward = new Reward();
		reward.title = title;
		reward.coins = coins;
		reward.assignedBy = parseInt(userId);
		reward.assignedTo = assignedTo;
		reward.assignedToName = assignedToName;

		// Save challenge
		const rewardsRepo = getRepository(Reward);
		await rewardsRepo.save(reward);

		// Access child to assign new challenge
		const child = await User.findOne({
			where: { id: assignedTo },
			relations: ['rewards'],
		});

		child.rewards = [...child.rewards, reward];

		// Save child
		const userRepo = getRepository(User);
		await userRepo.save(child);
		res.status(200).json({ msg: 'Reward added successfully.', child });
	} catch (err) {
		console.log('Error at add reward: ', err);
		return res.status(500).json({ msg: 'Error at add reward', err });
	}
};
