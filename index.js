import express from 'express';
import bodyParser from 'body-parser';
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
app.use(bodyParser.json());

app.use('/api/v1/meals', mealsRoute);
app.use('/api/v1/menu', menuRoute);
app.use('/api/v1/orders', ordersRoute);

const PORT = 8080;

// configure the app to listen on localhost
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server Running on port ${PORT}`);
});
