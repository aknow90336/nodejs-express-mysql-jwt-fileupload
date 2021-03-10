const express = require("express");
const app = express();

//Import Routes
const authRoute = require('./routes/auth');

//Middlewares
app.use(express.json())

//Route Middlewares
app.use('/api/user', authRoute);

//DB Connection Test
const db = require('./src/database/connection');
db.authenticate()
   .then(() => console.log('Database connected...'))
   .catch(err => console.log('Error: ' + err))

app.listen(80, () => console.log('Up and running'));

