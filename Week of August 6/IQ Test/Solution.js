let iqTest = (numbers) => {
  let arr = numbers.split(' ');
  let evenCount = 0;
  let oddCount = 0;

  function isEven(element) {
    return element % 2 === 0;
  }

  function isOdd(element) {
    debugger;
    return element % 2 !== 0;
  }

  for(i = 0; i < arr.length; i++) {
    if( arr[i] % 2 === 0) {
      evenCount++;
    } else {
      oddCount++
    }
  }

  if(evenCount > oddCount) {
    let oddLocation = arr.findIndex(isOdd);
    return oddLocation + 1;
  } else {
    let evenLocation = arr.findIndex(isEven);
    return evenLocation + 1;
  }
}

iqTest("2 4 7 8 10");
