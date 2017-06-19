function sortArray(array) {
  let oddAry = [];
  let combinedAry = [];


  for(i = 0; i < array.length; i++) {
    if(array[i] % 2 === 0) {
      combinedAry[i] = array[i]
    } else {
      oddAry.push(array[i])
      oddAry.sort(function(a, b) {
        return a - b;
      });
    }
  }

  for(i = 0; i <= combinedAry.length; i++) {
    for(j = 0; j < oddAry.length; j++) {
      if(combinedAry[i] === undefined) {
        combinedAry[i] = oddAry[j];
        oddAry.shift();
      }
    }
  }

  return combinedAry;
}
