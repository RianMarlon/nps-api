import { Router } from 'express';

import { UsersController } from './controllers/UsersController';
import { SurveysController } from './controllers/SurveysController';

const routes = Router();

const usersController = new UsersController();
const surveysController = new SurveysController();

routes.post('/users', usersController.create);
routes.post('/surveys', surveysController.create);

export default routes;