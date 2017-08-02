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
let formattedDate = chalk.blue(moment().format('dddd, MMMM Do YYYY, h:mm:ss a'))
let dayofYear = chalk.magenta(moment().format('DDD'))

// Your moment
var seconds = moment();

// Your moment at midnight
var secondsMidnight = seconds.clone().startOf('day');

// Difference in minutes
var diffSeconds = seconds.diff(secondsMidnight, 'seconds');

var secondsToday = chalk.cyan(diffSeconds);

let dst = moment().isDST();
if (dst === true){
dst = chalk.green("is")} else{
  dst = chalk.green("is not")
}
console.log(dst)

let leapYear = moment().isLeapYear();
if (leapYear === true){
  leapYear = chalk.red("is") } else{
  leapYear = chalk.red("is not")
}
console.log(leapYear)



console.log("It is " + formattedDate + " !");
console.log("It is the " + dayofYear + " " + "day of the year!");
console.log("It is" + " " + secondsToday + " "+ "second into the day!");
console.log("It" +" "+ dst + " " + "daylight savings time!")
console.log("It" + " " + leapYear + " " + "a leap year!")


// make express listen on port 3000
app.listen(3000);
