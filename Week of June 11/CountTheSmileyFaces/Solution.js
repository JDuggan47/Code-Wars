function countSmileys(arr) {

  let eyes = [':', ';']; //required
  let nose = ['-', '~']; //not required, but needed if has a nose
  let mouth = [')', 'D']; // required
  let count = 0;

  for(i = 0; i < arr.length; i++) {
    let newArr = arr[i].split('');
    if (newArr.length === 3) {
      if( eyes.includes(newArr[0]) && nose.includes(newArr[1]) && mouth.includes(newArr[2]) ){
        count++
      }
    } else if (eyes.includes(newArr[0]) && mouth.includes(newArr[1]) ) {
           count++
    }
  }
 return count;
}
