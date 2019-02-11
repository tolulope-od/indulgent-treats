import chai from 'chai';
import MealsService from '../services/MealsService';

const { expect } = chai;

/* global it, describe */

describe('Get all Meals', () => {
  describe('Retrieve All Meal Options', () => {
    it('Should return all meal options as objects in an array', () => {
      const meals = new MealsService().fetchAllMeals();

      expect(meals).to.deep.equal([
        {
          id: 1,
          name: 'Jollof Rice',
          size: 'plates',
          price: '500',
          currency: 'NGN',
        },
        {
          id: 2,
          name: 'Fried Rice',
          size: 'plates',
          price: '500',
          currency: 'NGN',
        },
        {
          id: 3,
          name: 'Coconut Rice',
          size: 'plates',
          price: '500',
          currency: 'NGN',
        },
      ]);
    });
  });
  describe('Retrieve one meal', () => {
    it('Should return one meal option object based on the id', () => {
      const meal = new MealsService().get(1);

      expect(meal).to.deep.equal({
        id: 1,
        name: 'Jollof Rice',
        size: 'plates',
        price: '500',
        currency: 'NGN',
      });
    });
  });
});
