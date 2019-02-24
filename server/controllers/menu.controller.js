import models from '../models';

const { Meal, Menu } = models;

const MenuController = {
/**
*Gets menu
*@param  {Object} req - request
*@param  {object} res - response
*@return {object} - status code and  message
*/
  fetchMenu(req, res) {
    Menu.findAll()
      .then(menu => res.status(200).json({
        status: 'success',
        data: menu,
      }));
  },
  /**
  *Sets up meny
  *@param  {Object} req - request
  *@param  {object} res - response
  *@return {object} - status code and  message
  */
  setupMenu(req, res) {
    Meal.findAll().then((allMeals) => {
      Menu.create({
        day: new Date(),
        meals: allMeals,
      }).then(() => res.status(201).json({
        status: 'success',
        message: 'Menu set up successfully',
      }));
    });
  },
  /**
  *Adds a meal to the menu
  *@param  {Object} req - request
  *@param  {object} res - response
  *@return {object} - status code and  message
  */
  addAMeal(req, res) {
    const { id } = req.params;
    Meal.findOne({ where: { id } })
      .then((meal) => {
        if (!meal) {
          return res.status(400).json({
            status: 'Error',
            message: 'no meal with that id',
          });
        }
        return Menu.create({
          day: new Date(),
          meals: meal,
        }).then(() => res.status(201).json({
          status: 'success',
          message: 'Menu set up successfully',
        }));
      });
  },
};

export default MenuController;
