import { Request, Response } from 'express';
import { User } from '../../entity/User';
import { createRefreshToken } from '../../services/createRefreshToken';
import { createAccessToken } from '../../services/createAccessToken';

interface ChildInformation {
	id: number;
}

/*
 * Used to login the following children
 * Using information read in the QR Code
 */
export default async (req: Request, res: Response) => {
	try {
		// Get data from request
		const { id }: ChildInformation = req.body;

		// Check if child exists
		let user = await User.findOne({ where: { id } });
		if (!user) {
			return res.status(400).json({ msg: 'Child does not exist' });
		} else {
			// TODO: For production, send JWTs via cookies instead of the following JSON response
			return res.status(200).json({
				msg: 'User logged in successfully.',
				accessToken: createAccessToken(user),
				refreshToken: createRefreshToken(user),
			});
		}
	} catch (err) {
		console.log(err);
		return res.status(500).json({ msg: 'Error: ' + err });
	}
};
