const add = function() {
  return arguments[0] + arguments[1];
};

const subtract = function() {
	return arguments[0] - arguments[1];
};

const sum = function() {
  let result = 0;
	for (let i = 0; i < arguments[0].length; i++) {
    result += arguments[0][i];
  }
  return result;
};

const multiply = function() {
  let result = 1;
	for (let i = 0; i < arguments[0].length; i++) {
    result *= arguments[0][i];
  }
  return result;
};

const power = function() {
	let result = 1;
	for (let i = 0; i < arguments[1]; i++) {
    result *= arguments[0];
  }
  return result;
};

const factorial = function() {
	let result = 1;
	for (let i = 1; i <= arguments[0]; i++) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
