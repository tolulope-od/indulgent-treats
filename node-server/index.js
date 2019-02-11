import express from 'express';

// Set up the app with express
const app = express();

const PORT = 8080;

app.get('/test', (req, res) => {
  res.status(200).send('Response Returned Successfully');
});

// configure the app to listen on localhost
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server Running on port ${PORT}`);
});
