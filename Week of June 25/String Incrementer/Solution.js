let incrementString = (strng) => {
  if(strng === '') {
    return 1;
  }

  let ary = strng.split('');
  let nums = [];
  let letters = [];
  let zeroAry = [];
  let thousandZeroAry = []

  for(i = 0; i < ary.length; i++) {
    if( ary[i] === '0' && ary[i + 1] >= '0' && ary[i -1] >= '0') {
      zeroAry.push(ary[i]);
    } else if(ary[i] >= '0' && ary[i] <= '9') {
      nums.push(ary[i]);
    } else if( ary[i] !== '0' ) {
      letters.push(ary[i]);
    }
  }

  let num = parseInt(nums.join('')) + 1;
  let letter = letters.join('');
  let results = zeroAry.join('') + num;
  let resultsThousands;

  if(num % 100 === 0) {
    for(i = 0; i < zeroAry.length - 1; i++) {
      thousandZeroAry.push(zeroAry[i])
    }

    if(nums.length === 0) {
      return letter + 1;
    } else {
      resultsThousands = thousandZeroAry.join('') + num;
      return letter + resultsThousands;
    }
  }

  if(nums.length === 0) {
    return letter + 1;
  } else {
    return letter + results;
  }
};
