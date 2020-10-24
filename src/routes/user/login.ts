import { Request, Response } from 'express';
import { compare } from 'bcrypt';
import { User } from '../../entity/User';
import { createRefreshToken } from '../../services/createRefreshToken';
import { createAccessToken } from '../../services/createAccessToken';

interface UserInformation {
	email: string;
	password: string;
}

/*
 * Used to login the following users: Parents/Guardians and Health Professionals
 * Children will be logged in using the QR Code
 */
export default async (req: Request, res: Response) => {
	try {
		// Get data from request
		const { email, password }: UserInformation = req.body;

		// Check if user exists
		let user = await User.findOne({ where: { email } });
		if (!user) {
			return res.status(400).json({ msg: 'Wrong email or password.' });
		} else {
			// Check if password is correct
			const valid = await compare(password, user.password);

			if (!valid) {
				return res.status(400).json({ msg: 'Wrong email or password.' });
			}

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
