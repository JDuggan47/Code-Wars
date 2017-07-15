let reverseWords = (str) => {
  let arry = str.split(' ');
  let reverse = [];
  let results = '';

  for(i = arry.length -1; i >= 0; i--) {
    let word = arry[i];
   for(j = word.length -1; j >= 0; j--) {
     reverse.push(word[j])
   }
    results += reverse.join('') + ' '
    reverse = [];
  }
    return results;
}

reverseWords()
