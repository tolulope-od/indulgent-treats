import models from '../models';

const { Meal } = models;

const MealController = {
/**
  *Gets all meals
  *@param  {Object} req - request
  *@param  {object} res - response
  *@return {object} - status code and  message
  */
  fetchAllMeals(req, res) {
    Meal.findAll().then(meals => res.status(200).json({
      status: 'success',
      data: meals,
    }));
  },

  /**
  *Adds a meal
  *@param  {Object} req - request
  *@param  {object} res - response
  *@return {object} - status code and  message
  */
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
    Meal.create({
      name: newMeal.name,
      size: newMeal.size,
      price: newMeal.price,
      imageURL: newMeal.imageURL,
    }).then(() => res.status(201).json({
      status: 'success',
      message: 'Meal created',
      data: {
        name: newMeal.name,
        size: newMeal.size,
        price: newMeal.price,
      },
    }));
  },

  /**
  *Gets a single meal
  *@param  {Object} req - request
  *@param  {object} res - response
  *@return {object} - status code and  message
  */
  getSingleMeal(req, res) {
    const { id } = req.params;
    Meal.findOne({ where: { id } })
      .then((meal) => {
        if (!meal) {
          return res.status(400).json({
            status: 'error',
            message: 'that meal does not exist',
          });
        }
        return res.status(200).json({
          status: 'success',
          data: meal,
        });
      });
  },
  /**
  *Deletes a meal
  *@param  {Object} req - request
  *@param  {object} res - response
  *@return {object} - status code and  message
  */
  deleteSingleMeal(req, res) {
    const { id } = req.params;
    Meal.destroy({ where: { id } })
      .then((meal) => {
        if (!meal) {
          return res.status(400).json({
            status: 'error',
            message: 'that meal does not exist',
          });
        }
        return res.status(200).json({
          status: 'success',
          message: 'Meal Deleted',
        });
      });
  },
  /**
  *Edits a meal
  *@param  {Object} req - request
  *@param  {object} res - response
  *@return {object} - status code and  message
  */
  editAMeal(req, res) {
    const { id } = req.params;
    const editedMeal = req.body;
    Meal.find({ where: { id } })
      .then((meal) => {
        if (!meal) {
          return res.status(400).json({
            status: 'error',
            message: 'that meal does not exist',
          });
        }

        return Meal.update({
          name: editedMeal.name,
          price: editedMeal.price,
          size: editedMeal.size,
          imageURL: editedMeal.imageURL,
        },
        {
          where: { id },
        }).then(() => res.status(200).json({
          status: 'success',
          data: meal,
        }));
      });
  },
};

export default MealController;
