const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const router = require('./routes');
//  HTTP logger
const morgan = require('morgan');
app.use(morgan('combined'));

// Template engine
const handlebars = require('express-handlebars');
const route = require('./routes');
app.engine('.hbs', handlebars.engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, '/resources/views'));

// Static file
app.use(express.static(path.join(__dirname, '/public')));

// Route init
route(app);

app.listen(port, () => {
  console.log(`App is listen on port ${port}`);
});
