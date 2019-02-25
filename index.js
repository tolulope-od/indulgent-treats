import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import { sequelize } from './server/models';
import mealsRoute from './server/routes/meal.route';
import menuRoute from './server/routes/menu.route';
import ordersRoute from './server/routes/order.route';

// Set up the app with express
const app = express();

/* Use to test server
app.get('/test', (req, res) => {
  res.status(200).send('Response Returned Successfully');
});
*/
app.use(bodyParser({ extended: false }));
app.use(bodyParser.json());

app.use('/api/v1/meals', mealsRoute);
app.use('/api/v1/menu', menuRoute);
app.use('/api/v1/orders', ordersRoute);

const PORT = 8080;

app.use(express.static('UI/'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'UI', 'index.html'));
});

// configure the app to listen on localhost and connect o the DB
const eraseDatabaseOnSync = false;

sequelize.sync({ force: eraseDatabaseOnSync })
  .then(() => {
    // eslint-disable-next-line no-console
    console.log('DB connected successfully');
  })
  .then(() => {
    app.listen(PORT, () => {
      // eslint-disable-next-line no-console
      console.log(`Server Running on port ${PORT}`);
    });
    // eslint-disable-next-line no-console
  }).catch(err => console.log(err));

export default app;
