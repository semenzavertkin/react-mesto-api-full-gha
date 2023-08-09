require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const { errors } = require('celebrate');
const bodyParser = require('body-parser');
const cors = require('cors');

const routes = require('./routes');
const { login, createUser } = require('./controllers/users');
const {
  validationLogin,
  validationCreateUser,
} = require('./middlewares/validation');
const handelError = require('./middlewares/handelError');
const auth = require('./middlewares/auth');
const { requestLogger, errorLogger } = require('./middlewares/logger');

const app = express();
const { PORT = 3000 } = process.env;
app.use(cors());
app.options('*', cors());

mongoose.connect('mongodb://127.0.0.1:27017/mestodb');

app.use(bodyParser.json());

app.use(requestLogger);

app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});

app.post('/signin', validationLogin, login);
app.post('/signup', validationCreateUser, createUser);

app.use(auth);
app.use(routes);
app.use(errorLogger);
app.use(errors());
app.use(handelError);

app.listen(PORT);
