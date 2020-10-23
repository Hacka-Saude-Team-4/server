import { Router } from 'express';
import childRoutes from './child';

const routes = Router();

routes.use('/child', childRoutes);

export default routes;
