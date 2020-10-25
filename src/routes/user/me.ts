import { Request, Response } from 'express';
import { compare } from 'bcrypt';
import { User } from '../../entity/User';
import { createRefreshToken } from '../../services/createRefreshToken';
import { createAccessToken } from '../../services/createAccessToken';

/*
 * Returns who the user currently authenticated is.
 */
export default async (req: Request, res: Response) => {
	try {
		// Get data from request
		const { userId } = req.payload as JWTPayload;

		// Check if user exists
		let user = await User.findOne({ where: { id: userId } });

		// TODO: For production, send JWTs via cookies instead of the following JSON response
		return res.status(200).json({
			msg: 'User logged in successfully.',
			user,
		});
	} catch (err) {
		console.log(err);
		return res.status(500).json({ msg: 'Error: ' + err });
	}
};
