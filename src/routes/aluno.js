//  Home routes
import { Router } from 'express';
import alunoController from '../controllers/aluno';

const router = new Router();

router.get('/', alunoController.index);

export default router;
