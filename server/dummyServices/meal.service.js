import Meal from '../dummyModels/meal.model';
import dummyData from '../utils/dummyData';

const MealsService = {
  fetchAllMeals() {
    return dummyData.meals.map((data) => {
      const meal = new Meal();
      meal.id = data.id;
      meal.name = data.name;
      meal.size = data.size;
      meal.price = data.price;
      return meal;
    });
  },

  addMeal(meal) {
    const mealsLength = dummyData.meals.length;
    const lastId = dummyData.meals[mealsLength - 1].id;
    const newId = lastId + 1;
    // eslint-disable-next-line no-param-reassign
    meal.id = newId;
    dummyData.meals.push(meal);
    return meal;
  },

  getAMeal(id) {
    // eslint-disable-next-line eqeqeq
    const foundMeal = dummyData.meals.find(meal => meal.id == id);
    return foundMeal || {};
  },

  deleteAMeal(id) {
    // eslint-disable-next-line eqeqeq
    const toDelete = dummyData.meals.findIndex(meal => meal.id == id);
    if (toDelete > -1) {
      dummyData.meals.splice(toDelete, 1);
      return dummyData.meals;
    }
    return {};
  },

  editAMeal(id, newMeal) {
    // eslint-disable-next-line eqeqeq
    const index = dummyData.meals.findIndex(meal => meal.id == id);
    const toEdit = dummyData.meals[index];
    if (toEdit) {
      toEdit.name = newMeal.name;
      toEdit.price = newMeal.price;
      toEdit.size = newMeal.size;

      return toEdit;
    }
    return {};
  },
};

export default MealsService;
