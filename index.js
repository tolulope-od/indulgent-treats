import express from 'express';
import mealsRoute from './server/routes/mealsRoute';

// Set up the app with express
const app = express();

/* Use to test server
app.get('/test', (req, res) => {
  res.status(200).send('Response Returned Successfully');
});
*/
app.use('/api/v1/meals', mealsRoute);

const PORT = 8080;

// configure the app to listen on localhost
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server Running on port ${PORT}`);
});
