import { Router } from 'express';
import validateAuth from '../../middleware/validateAuth';
import addChildren from './addChildren';
import listChildren from './listChildren';
import register from './register';
import updateInfo from './updateInfo';

const parentRoutes = Router();

parentRoutes.post('/register', register);
parentRoutes.post('/update', validateAuth, updateInfo);
parentRoutes.post('/child', validateAuth, addChildren);
parentRoutes.get('/children', validateAuth, listChildren);

export default parentRoutes;
