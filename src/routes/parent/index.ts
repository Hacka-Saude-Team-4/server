import { Router } from 'express';
import validateAuth from '../../middleware/validateAuth';
import register from './register';
import updateInfo from './updateInfo';

const parentRoutes = Router();

parentRoutes.post('/register', register);
parentRoutes.post('/update', validateAuth, updateInfo);

export default parentRoutes;
