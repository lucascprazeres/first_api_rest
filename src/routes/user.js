//  User routes
import { Router } from 'express';
import userController from '../controllers/user';

const router = new Router();

router.post('/', userController.create);

export default router;
