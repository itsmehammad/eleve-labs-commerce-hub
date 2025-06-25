const express = require('express');
const mongoose = require('mongoose');
const orderRouter = require('./routes/routes'); // or your filename

const app = express();
app.use(express.json());
app.use('/orders', orderRouter);

mongoose.connect('mongodb://localhost/your-db')
  .then(() => app.listen(3000, () => console.log('Listening on 3000')))
  .catch(console.error);
