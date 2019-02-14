import MealsService from '../services/meal.service';

const MealController = {
  fetAllMeals(req, res) {
    const allMeals = MealsService.fetchAllMeals();
    return res.json({
      status: 'success',
      data: allMeals,
    }).status(200);
  },

  addAMeal(req, res) {
    /*
    Expect json object with format:
    {
      name: 'new food',
      size: 'large',
      price: '233'
    }
    */
    const newMeal = req.body;
    const createdMeal = MealsService.addMeal(newMeal);
    return res.json({
      status: 'success',
      data: createdMeal,
    }).status(201);
  },

  getSingleMeal(req, res) {
    const { id } = req.params;
    const foundMeal = MealsService.getAMeal(id);
    return res.json({
      status: 'success',
      data: foundMeal,
    }).status(201);
  },
};

export default MealController;
