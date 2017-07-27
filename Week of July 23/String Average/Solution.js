let averageString = (str) => {
  let strLowerCase = str.toLowerCase();
  let arry = strLowerCase.split(' ');
  let sum = 0;

  let myObj = {
    'zero': 0,
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6,
    'seven': 7,
    'eight': 8,
    'nine': 9
  };

  if(str.length === 0) {
    return 'n/a';
  } else {
    for(i = 0; i < arry.length; i++) {
      if(myObj[arry[i]] === undefined) {
        return 'n/a';
      } else {
        sum += myObj[arry[i]];
      }
    }
    let avg = Math.floor(sum / arry.length);

    for(var key in myObj) {
      if(myObj[key] === avg) {
        return key;
      }
    }
  }
};
