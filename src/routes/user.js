//  User routes
import { Router } from 'express';
import loginRequired from '../middlewares/loginRequired';
import userController from '../controllers/user';

const router = new Router();

router.get('/', userController.index); // método usado para testes
router.get('/:id', userController.index); // máetodo usado para testes

router.post('/', loginRequired, userController.create);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;
