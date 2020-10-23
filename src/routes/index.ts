import { Router } from 'express';
import childRoutes from './child';
import parentRoutes from './parent';

const routes = Router();

routes.use('/child', childRoutes);
routes.use('/parent', parentRoutes);

export default routes;
