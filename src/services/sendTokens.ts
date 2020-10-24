import { Response } from 'express';

export default (res: Response, accessToken: String, refreshToken: String) => {
	res.cookie('bolacha', accessToken, {
		httpOnly: true,
	});

	res.cookie('biscoito', refreshToken, {
		httpOnly: true,
	});
};
