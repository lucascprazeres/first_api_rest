//  Home routes
import { Router } from 'express';
import loginRequired from '../middlewares/loginRequired';
import fotoController from '../controllers/foto';

const router = new Router();

router.post('/', loginRequired, fotoController.create);

export default router;
