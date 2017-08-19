let duplicateEncode = (word) => {
  let str = word.toLowerCase();
  let arry = str.split('');
  let myObj = {};
  let results = '';

  for(i = 0; i < arry.length; i++) {
    if(myObj[arry[i]] === undefined) {
      myObj[arry[i]] = 1;
    } else {
      myObj[arry[i]] += 1;
    }
  }

  for(i = 0; i < arry.length; i++) {
    if(myObj[arry[i]] === 1) {
      results += '('
    } else {
      results += ')'
    }
  }

  return results
}
