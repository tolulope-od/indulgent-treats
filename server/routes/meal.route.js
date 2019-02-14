import { Router } from 'express';
import MealController from '../controllers/meal.controller';

const router = Router();

router.get('/', MealController.fetchAllMeals);
router.post('/', MealController.addAMeal);
router.get('/:id', MealController.getSingleMeal);
router.delete('/:id', MealController.deleteSingleMeal);
router.put('/:id', MealController.editAMeal);

export default router;
