import { User } from '../entity/User';
import { sign } from 'jsonwebtoken';

export const createAccessToken = (user: User) => {
	return sign({ userId: user.id }, process.env.ACCESS_TOKEN_SECRET as string, {
		// expiresIn: '15m', // Production
		expiresIn: '7d', // Dev
	});
};
