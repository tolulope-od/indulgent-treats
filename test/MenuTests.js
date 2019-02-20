import chai from 'chai';
import MenuService from '../server/dummyServices/menu.service';

const { expect } = chai;

/* global it, describe */

describe('Access Menu Services', () => {
  describe('Set Menu', () => {
    it('Should set up and add available meals to the menu', () => {
      const menu = MenuService.setMenu();

      expect(menu).to.deep.equal([{
        id: 2,
        name: 'Yamarita',
        size: 'Large',
        price: '700',
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
      {
        id: 5,
        name: 'Beans',
        size: 'Medium',
        price: '250',
      },
      ]);
    });
  });
  describe('Fetch Menu', () => {
    it('Should populate the menu with all available meal options', () => {
      const menu = MenuService.fetchMenu();

      expect(menu).to.deep.equal([
        {
          id: 2,
          name: 'Yamarita',
          size: 'Large',
          price: '700',
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
        {
          id: 5,
          name: 'Beans',
          size: 'Medium',
          price: '250',
        },
      ]);
    });

    describe('Add one meal to the menu', () => {
      it('Should add a meal to the menu if the meal exists in the meal options', () => {
        const menu = MenuService.addAMeal(2);

        expect(menu).to.deep.equal({
          id: 2,
          name: 'Yamarita',
          size: 'Large',
          price: '700',
        });
      });

      it('Should return empty object if an existing or invalid meal is added', () => {
        const menu = MenuService.addAMeal(6);

        expect(menu).to.deep.equal({});
      });
    });
  });
});
