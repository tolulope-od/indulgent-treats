import MealsService from './meal.service';
import dummyData from '../utils/dummyData';

const { menu } = dummyData;

const MenuService = {
  fetchMenu() {
    return menu;
  },
  setMenu() {
    const newMenu = MealsService.fetchAllMeals();
    newMenu.map(items => menu.push(items));
    return menu;
  },
  addAMeal(id) {
    const newMeal = MealsService.getAMeal(id);
    // Check to make sure that the id entered is a valid id of an existing meal
    if (Object.entries(newMeal).length === 0 || !menu.indexOf(newMeal)) {
      return {};
    }
    // Check if meal exists already
    // eslint-disable-next-line eqeqeq
    const findMeal = menu.some(meal => meal.id == newMeal.id);
    if (!findMeal) {
      menu.push(newMeal);
      return menu;
    }
    return newMeal || {};
  },
};

export default MenuService;
