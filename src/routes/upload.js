//  Home routes
import { Router } from 'express';
import uploadController from '../controllers/upload';

const router = new Router();

router.post('/', uploadController.create);

export default router;
