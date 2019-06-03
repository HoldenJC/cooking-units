var gallonLiter = function(number1) {
  return number1 * 3.785412;
};

var tablespoonMilligram = function(number2) {
  return number2 * 14.786765;
}

var number1 = parseInt(prompt('Enter how many gallons of fluid:'));
var number2 = parseInt(prompt('Enter how many tablespoons of dry ingredients:'));

alert(number1 + ' gallons of liquid is equal to ' + gallonLiter(number1) + ' liters.');
alert(number2 + ' teaspoons of dry ingredients is equal to ' + gallonLiter(number2) + ' milligrams.');
