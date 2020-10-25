import { Router } from 'express';
import validateAuth from '../../middleware/validateAuth';
import addChildren from './addChildren';
import register from './register';
import updateInfo from './updateInfo';

const parentRoutes = Router();

parentRoutes.post('/register', register);
parentRoutes.post('/update', validateAuth, updateInfo);
parentRoutes.post('/child', validateAuth, addChildren);

export default parentRoutes;
