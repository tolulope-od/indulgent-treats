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

    it('Should return an empty object when an invalid id is specified', () => {
      const meal = MealsService.getAMeal(6);

      expect(meal).to.deep.equal({
      });
    });
  });
  describe('Delete one meal', () => {
    it('Should delete one meal option based on the id and return new meals list', () => {
      const meal = MealsService.deleteAMeal(1);

      expect(meal).to.deep.equal({
        meals: [
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
        ],
      });
    });

    it('Should return an empty object if a meal with an invalid id is called', () => {
      const meal = MealsService.deleteAMeal(6);

      expect(meal).to.deep.equal({});
    });
  });
  describe('Add one meal', () => {
    it('Should add a meal to the existing meals and return the new meal', () => {
      const newMeal = { name: 'Beans', size: 'Medium', price: '250' };
      const meal = MealsService.addMeal(newMeal);

      expect(meal).to.deep.equal(
        {
          id: 5,
          name: 'Beans',
          size: 'Medium',
          price: '250',
        },
      );
    });
  });

  describe('Edit an existing meal', () => {
    it('Should edit an existing meal option based on the id', () => {
      const newMeal = { name: 'Yamarita', size: 'Large', price: '700' };
      const meal = MealsService.editAMeal(2, newMeal);

      expect(meal).to.deep.equal(
        {
          id: 2,
          name: 'Yamarita',
          size: 'Large',
          price: '700',
        },
      );
    });

    it('Should return an empty object if an invalid id is specified', () => {
      const newMeal = { name: 'Yamarita', size: 'Large', price: '700' };
      const meal = MealsService.editAMeal(6, newMeal);

      expect(meal).to.deep.equal(
        {},
      );
    });
  });
});
