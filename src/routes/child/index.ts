import { Router } from 'express';
import login from './login';

const childRoutes = Router();

childRoutes.post('/login', login);

export default childRoutes;
