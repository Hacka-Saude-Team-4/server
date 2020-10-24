import { Router } from 'express';
import login from './login';

const userRoutes = Router();

userRoutes.post('/login', login);

export default userRoutes;
