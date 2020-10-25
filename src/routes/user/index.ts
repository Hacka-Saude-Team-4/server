import { Router } from 'express';
import validateAuth from '../../middleware/validateAuth';
import getUsername from './getUsername';
import login from './login';
import me from './me';

const userRoutes = Router();

userRoutes.post('/login', login);
userRoutes.post('/me', validateAuth, me);
userRoutes.get('/name', getUsername);

export default userRoutes;
