import MealsService from './meal.service';

const Menu = [];

const MenuService = {
  fetchMenu() {
    return Menu;
  },
  setMenu() {
    const newMenu = MealsService.fetchAllMeals();
    newMenu.map(items => Menu.push(items));
    return Menu;
  },
  addAMeal(id) {
    const newMeal = MealsService.getAMeal(id);
    // Check to make sure that the id entered is a valid id of an existing meal
    if (Object.entries(newMeal).length === 0 || !Menu.indexOf(newMeal)) {
      return {};
    }
    // Check if meal exists already
    // eslint-disable-next-line eqeqeq
    const findMeal = Menu.some(meal => meal.id == newMeal.id);
    if (!findMeal) {
      Menu.push(newMeal);
      return Menu;
    }
    return newMeal || {};
  },
};

export default MenuService;
