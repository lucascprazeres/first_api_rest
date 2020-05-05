//  User routes
import { Router } from 'express';
import loginRequired from '../middlewares/loginRequired';
import userController from '../controllers/user';

const router = new Router();

router.post('/', userController.create);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;
