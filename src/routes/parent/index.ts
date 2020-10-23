import { Router } from 'express';
import register from './register';

const parentRoutes = Router();

parentRoutes.get('/register', register);

export default parentRoutes;
