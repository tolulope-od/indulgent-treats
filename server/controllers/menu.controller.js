import MenuService from '../services/menu.service';

const MenuController = {
  fetchMenu(req, res) {
    const menu = MenuService.fetchMenu();
    return res.json({
      status: 'success',
      data: menu,
    }).status(200);
  },

  setupMenu(req, res) {
    const meals = MenuService.setMenu();
    return res.json({
      status: 'success',
      data: meals,
    }).status(201);
  },

  addAMeal(req, res) {
    const { id } = req.params;
    const addedMeal = MenuService.addAMeal(id);
    if (Object.entries(addedMeal).length !== 0) {
      return res.json({
        status: 'success',
        data: addedMeal,
      }).status(201);
    }
    return res.json({
      status: 'Error',
      message: 'Meal does not exist',
    }).status(400);
  },
};

export default MenuController;
