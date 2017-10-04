require('rootpath')();
const express = require('express');
const path = require('path');
const HBS = require('express-handlebars');

const app = express();

// Set handlebars as view engine
const hbs = HBS.create({ extname: '.hbs' });
app.engine('.hbs', hbs.engine);
app.set('views', path.join(__dirname, 'templates'));
app.set('view engine', '.hbs');

app.use((req, res, next) => {
    res.render('index');
});

module.exports = app;
