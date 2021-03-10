const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');

// init appsetting
dotenv.config();

// init express
const app = express();

// parse requests with type application/json
app.use(bodyParser.json());

// add cookieParser
app.use(cookieParser(process.env.AUTH_SECRET));

// route middlewares
app.use('/api/user', require('./app/routes/auth'));

// dB connection Test
const db = require('./app/src/database/connection');
db.authenticate()
   .then(() => console.log('Database connected...'))
   .catch(err => console.log('Error: ' + err))

// listen port
const PORT = process.env.PORT || 80;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
