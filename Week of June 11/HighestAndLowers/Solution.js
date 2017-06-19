function highAndLow(numbers){
  let ary = numbers.split(' ');
  let max = parseInt(ary[0])
  let min = parseInt(ary[0])
  for(i = 0; i < ary.length; i++){
    let newNumber = parseInt(ary[i])
    if(newNumber > max) {
      max = newNumber;
    } else if (newNumber < min) {
      min = newNumber;
    }
  }
  return min.toString() + ' ' + max.toString()
}

highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6")
