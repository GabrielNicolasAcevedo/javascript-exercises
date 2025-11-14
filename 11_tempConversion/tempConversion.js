const convertToCelsius = function(tempFahren) {
  let temp = ((tempFahren - 32 ) * (5/9));
  return Math.round(temp * 10) / 10;
};

const convertToFahrenheit = function(tempCel) {
  let temp = ((tempCel * (9/5)) + 32);
  return Math.round(temp * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
