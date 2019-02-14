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
    if (Object.entries(newMeal).length === 0) {
      return {};
    }
    // eslint-disable-next-line eqeqeq
    const findMeal = Menu.some(meal => meal.id == newMeal.id);
    if (!findMeal) {
      Menu.push(newMeal);
      return newMeal;
    }

    return {};
  },
};

export default MenuService;
