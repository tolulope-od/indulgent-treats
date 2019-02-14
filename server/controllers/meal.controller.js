import MealsService from '../services/meal.service';

const MealController = {
  fetchAllMeals(req, res) {
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
    if (Object.entries(foundMeal).length !== 0) {
      return res.json({
        status: 'success',
        data: foundMeal,
      }).status(200);
    }
    return res.json({
      status: 'Error',
      message: 'No meal with that id found',
    }).status(400);
  },

  deleteSingleMeal(req, res) {
    const { id } = req.params;
    const deletedMeal = MealsService.deleteAMeal(id);
    if (Object.entries(deletedMeal).length !== 0) {
      return res.json({
        status: 'success',
        data: deletedMeal,
      }).status(200);
    }
    return res.json({
      status: 'Error',
      message: 'No meal with that id found',
    }).status(400);
  },

  editAMeal(req, res) {
    const { id } = req.params;
    const newMeal = req.body;
    const editedMeal = MealsService.editAMeal(id, newMeal);
    if (Object.entries(editedMeal).length !== 0) {
      return res.json({
        status: 'success',
        data: editedMeal,
      }).status(200);
    }
    return res.json({
      status: 'Error',
      message: 'No meal with that id found',
    }).status(400);
  },
};

export default MealController;
