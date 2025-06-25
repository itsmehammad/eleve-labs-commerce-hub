const express = require('express');
const mongoose = require('mongoose');
const orderRouter = require('./routes/routes'); // or your filename

const app = express();
app.use(express.json());
app.use('/orders', orderRouter);

mongoose.connect('mongodb+srv://hammad:4Ywvvs2.QTQ2ThT@cluster0.slxcsfx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => app.listen(5000, () => console.log('Listening on 3000')))
  .catch(console.error);
