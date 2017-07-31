const expressHandlebars = require('express-handlebars');
const chalk = require('chalk');
const moment = require('moment');
const express = require('express');
const app = express();


app.engine('handlebars', expressHandlebars());
app.set('views', './views');
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.render('home', {
    formattedDate: moment().format('dddd, MMMM Do YYYY, h:mm:ss a')
  });
});

console.log(chalk.blue("hello"))

// make express listen on port 3000
app.listen(3000);
