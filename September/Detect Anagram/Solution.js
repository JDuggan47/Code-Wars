let isPangram = (string) => {
 alphabetObj = {};
 let arr = string.toLowerCase().split(' ');

  for(i = 0; i < arr.length; i++) {
    let word = arr[i];
    for(j = 0; j < word.length; j++) {
      debugger;
      if(alphabetObj[word[j]] === undefined) {
        alphabetObj[word[j]] = 1;
      } else {
        alphabetObj[word[j]]++;
      }
    }
  }

  return Object.keys(alphabetObj).length >= 26;
}
