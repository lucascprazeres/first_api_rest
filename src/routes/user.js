//  User routes
import { Router } from 'express';
import userController from '../controllers/user';

const router = new Router();

router.get('/', userController.index);
router.get('/:id', userController.show);
router.post('/', userController.create);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);

export default router;
