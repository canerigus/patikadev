const { circleArea, circleCircumference } = require('./circle');
const arguments = process.argv.slice(2);
const num = arguments[0];



circleArea(num);
circleCircumference(num);