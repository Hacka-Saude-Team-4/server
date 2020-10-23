import { Router } from 'express';
import register from './register';

const parentRoutes = Router();

parentRoutes.post('/register', register);

export default parentRoutes;
