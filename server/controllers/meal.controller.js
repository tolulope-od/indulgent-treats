import MealsService from '../services/meal.service';

const MealController = {
  fetchAllMeals(req, res) {
    const allMeals = MealsService.fetchAllMeals();
    return res.status(200).json({
      status: 'success',
      data: allMeals,
    });
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
    return res.status(201).json({
      status: 'success',
      data: createdMeal,
    });
  },

  getSingleMeal(req, res) {
    const { id } = req.params;
    const foundMeal = MealsService.getAMeal(id);
    if (Object.entries(foundMeal).length !== 0) {
      return res.status(200).json({
        status: 'success',
        data: foundMeal,
      });
    }
    return res.status(400).json({
      status: 'Error',
      message: 'No meal with that id found',
    });
  },

  deleteSingleMeal(req, res) {
    const { id } = req.params;
    const deletedMeal = MealsService.deleteAMeal(id);
    if (Object.entries(deletedMeal).length !== 0) {
      return res.status(200).json({
        status: 'success',
        data: deletedMeal,
      });
    }
    return res.status(400).json({
      status: 'Error',
      message: 'No meal with that id found',
    });
  },

  editAMeal(req, res) {
    const { id } = req.params;
    const newMeal = req.body;
    const editedMeal = MealsService.editAMeal(id, newMeal);
    if (Object.entries(editedMeal).length !== 0) {
      return res.status(200).json({
        status: 'success',
        data: editedMeal,
      });
    }
    return res.status(400).json({
      status: 'Error',
      message: 'No meal with that id found',
    });
  },
};

export default MealController;
