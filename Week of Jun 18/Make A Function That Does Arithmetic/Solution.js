let arithmetic = (a, b, operator) => {
  let operatorLowerCase = operator.toLowerCase();
  let operators = ['add', 'subtract', 'multiply', 'divide'];

  if(operatorLowerCase === operators[0]) {
    return a + b;
  } else if(operatorLowerCase === operators[1]) {
    return a - b;
  } else if(operatorLowerCase === operators[2]) {
    return a * b;
  } else if(operatorLowerCase === operators[3]) {
    return a / b;
  }
}
