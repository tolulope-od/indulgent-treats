import chai from 'chai';
import MealsService from '../server/services/meal.service';

const { expect } = chai;

/* global it, describe */

describe('Access Meals Service', () => {
  describe('Retrieve All Meal Options', () => {
    it('Should return all meal options as objects in an array', () => {
      const meals = MealsService.fetchAllMeals();

      expect(meals).to.deep.equal([
        {
          id: 1,
          name: 'Jollof Rice',
          size: 'Medium',
          price: '500',
        },
        {
          id: 2,
          name: 'Fried Rice',
          size: 'Small',
          price: '400',
        },
        {
          id: 3,
          name: 'Coconut Rice',
          size: 'Medium',
          price: '800',
        },
        {
          id: 4,
          name: 'Basmati Rice & Beef',
          size: 'Large',
          price: '1500',
        },
      ]);
    });
  });
  describe('Retrieve one meal', () => {
    it('Should return one meal option object based on the id', () => {
      const meal = MealsService.getAMeal(1);

      expect(meal).to.deep.equal({
        id: 1,
        name: 'Jollof Rice',
        size: 'Medium',
        price: '500',
      });
    });
  });
  describe('Delete one meal', () => {
    it('Should delete one meal option based on the id and return new meals list', () => {
      const meal = MealsService.delete(1);

      expect(meal).to.deep.equal([
        {
          id: 2,
          name: 'Fried Rice',
          size: 'Small',
          price: '400',
        },
        {
          id: 3,
          name: 'Coconut Rice',
          size: 'Medium',
          price: '800',
        },
        {
          id: 4,
          name: 'Basmati Rice & Beef',
          size: 'Large',
          price: '1500',
        },
      ]);
    });
  });
});
