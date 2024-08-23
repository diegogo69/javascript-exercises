const add = function(a, b) {
  return a + b	
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(array) {
  if (!array[0]) return 0
	return array.reduce((total, num) => total + num);
};

const multiply = function(array) {
  if (!array[0]) return 0
	return array.reduce((total, num) => total * num);
};

const power = function(a, b) {
  return a ** b
};

const factorial = function(x) {
  let numbers = []
  for (let i = 0; i <= x; i++) {
    numbers.push(i);
  }

  return numbers.reduce((fact, num) => {
    if (num == 0) return 1
    return fact * num
  }, 0)      
};
const log = console.log;
log(factorial(0));
log(factorial(1));

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
