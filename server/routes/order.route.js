import { Router } from 'express';
import OrderController from '../controllers/order.controller';

const router = Router();

router.get('/', OrderController.fetchAllOrders);
router.post('/', OrderController.placeAnOrder);
router.put('/:id', OrderController.editAnOrder);

export default router;
