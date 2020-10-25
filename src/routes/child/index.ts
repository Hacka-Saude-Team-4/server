import { Router } from 'express';
import validateAuth from '../../middleware/validateAuth';
import getChallenges from './getChallenges';
import login from './login';

const childRoutes = Router();

childRoutes.post('/login', login);
childRoutes.get('/challenges', validateAuth, getChallenges);

export default childRoutes;
