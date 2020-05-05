//  User routes
import { Router } from 'express';
import loginRequired from '../middlewares/loginRequired';
import userController from '../controllers/user';

const router = new Router();

router.get('/', loginRequired, userController.index);
router.get('/:id', userController.show);
router.post('/', userController.create);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);

export default router;
