import { User } from '../entity/User';
import { sign } from 'jsonwebtoken';

export const createRefreshToken = (user: User) => {
	return sign({ userId: user.id }, process.env.REFRESH_TOKEN_SECRET as string, {
		// expiresIn: '7d', // Production
		expiresIn: '30d', // Dev
	});
};
