import Sequelize from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(process.env.DATABASE_URL,
  {
    operatorsAliases: false,
  });

const models = {
  Meal: sequelize.import('./Meal.js'),
  Menu: sequelize.import('./Menu.js'),
  Order: sequelize.import('./Order.js'),
  Caterer: sequelize.import('./Caterer.js'),
};

Object.keys(models).forEach((key) => {
  if ('associate' in models[key]) {
    models[key].associate(models);
  }
});

export { sequelize };

export default models;
