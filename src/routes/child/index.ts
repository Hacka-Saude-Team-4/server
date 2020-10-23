import { Router } from 'express';
import greet from './greet';

const childRoutes = Router();

childRoutes.get('/greet', greet);

export default childRoutes;
