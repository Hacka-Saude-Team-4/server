import { Request, Response } from 'express';
import { User } from '../../entity/User';
import { getRepository } from 'typeorm';
import { Challenge } from '../../entity/Challenge';

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
		let challenge = new Challenge();
		challenge.title = title;
		challenge.coins = coins;
		challenge.assignedBy = parseInt(userId);
		challenge.assignedTo = assignedTo;
		challenge.assignedToName = assignedToName;

		// Save challenge
		const challengesRepo = getRepository(Challenge);
		await challengesRepo.save(challenge);

		// Access child to assign new challenge
		const child = await User.findOne({
			where: { id: assignedTo },
			relations: ['challenges'],
		});

		child.challenges = [...child.challenges, challenge];

		// Save child
		const userRepo = getRepository(User);
		await userRepo.save(child);
		res.status(200).json({ msg: 'Challenge added successfully.', child });
	} catch (err) {
		console.log('Error at add challenge: ', err);
		return res.status(500).json({ msg: 'Error at add challenge', err });
	}
};
