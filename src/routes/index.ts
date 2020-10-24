import { Router } from 'express';
import childRoutes from './child';
import parentRoutes from './parent';
import userRoutes from './user';

const routes = Router();

routes.use('/child', childRoutes);
routes.use('/parent', parentRoutes);
routes.use('/user', userRoutes);

export default routes;
