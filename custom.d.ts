interface JWTPayload {
	userId: string;
}

declare namespace Express {
	export interface Request {
		payload?: string | object | JWTPayload;
	}
}
