import { Router } from 'express';
import MenuController from '../controllers/menu.controller';

const router = Router();

router.get('/', MenuController.fetchMenu);
router.post('/', MenuController.setupMenu);
router.post('/:id', MenuController.addAMeal);

export default router;
