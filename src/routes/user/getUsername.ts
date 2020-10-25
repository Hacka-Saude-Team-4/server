import { Request, Response } from 'express';
import { User } from '../../entity/User';

/*
 * Returns username based on ID
 */
export default async (req: Request, res: Response) => {
	try {
		// Get data from request
		const { id } = req.body;

		// Check if user exists
		let user = await User.findOne({ where: { id } });

		return res.status(200).json({
			msg: 'User found.',
			username: user.name,
		});
	} catch (err) {
		console.log(err);
		return res.status(500).json({ msg: 'Error: ' + err });
	}
};
