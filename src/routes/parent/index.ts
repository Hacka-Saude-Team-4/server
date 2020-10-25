import { Router } from 'express';
import validateAuth from '../../middleware/validateAuth';
import addChildren from './addChildren';
import addChildrenChallenge from './addChildrenChallenge';
import getChallengesAssigned from './getChallengesAssigned';
import listChildren from './listChildren';
import register from './register';
import updateInfo from './updateInfo';

const parentRoutes = Router();

parentRoutes.post('/register', register);
parentRoutes.post('/update', validateAuth, updateInfo);
parentRoutes.post('/child', validateAuth, addChildren);
parentRoutes.get('/children', validateAuth, listChildren);
parentRoutes.post('/challenge', validateAuth, addChildrenChallenge);
parentRoutes.get('/challenges', validateAuth, getChallengesAssigned);

export default parentRoutes;
