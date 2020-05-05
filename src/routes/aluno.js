//  Home routes
import { Router } from 'express';
import loginRequired from '../middlewares/loginRequired';
import alunoController from '../controllers/aluno';

const router = new Router();

//  router.use(loginRequired);

router.get('/', alunoController.index);
router.get('/:id', alunoController.show);
router.post('/', loginRequired, alunoController.create);
router.put('/:id', loginRequired, alunoController.update);
router.delete('/:id', loginRequired, alunoController.delete);

export default router;
