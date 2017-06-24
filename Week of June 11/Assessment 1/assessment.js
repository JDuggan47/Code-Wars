/******************************************************************************
** Write a function range(start, end) that returns an array that contains all
** numbers between 'start' and 'end' in sequential order.
** Examples:
** range(1,4) => [1,2,3,4]
** range(4,2) => []
*/

function range(start, end){
  let order = [];
  if (start < end) {
    for(var i = start; i <= end; i++){
      order.push(i)
    }
  }
  else {
    return order;
    }
  return order;
}

/******************************************************************************
** Write a function unique(array) that returns an array where all the duplicates
** of the input array have been removed; in other words, every element remaining
** is unique.
** Example:
** unique([1, 1, 2, 3, 3]) => [1, 2, 3]
*/

function unique(array){
  let order = [];
  for(var i = 0; i < array.length; i++) {
    if(!order.includes(array[i]))
      order.push(array[i])
  }
  return order
}

/******************************************************************************
** Write a function elementCount(array) that returns an object. Each key
** corresponds to an element in the array and the value corresponds to how many
** times that element appears in the array.
** Example:
** elementCount(["a", "a", "a", "b"]) => { "a" : 3, "b" : 1 }
*/

function elementCount(array){
  let countObj = {};
  for(var i=0; i < array.length; i++) {
    if(countObj[array[i]] === undefined){
      countObj[array[i]] = 1;
    } else {
      countObj[array[i]] += 1
    }
  }

  return countObj;
}

/******************************************************************************
** Write a function reverseSentence(sentence) that returns a string where all the
** words in the input sentence are reversed. Don't use Array#reverse.
** Examples:
** reverseSentence("Go to the store") => "store the to Go"
** reverseSentence("Jump, jump for joy") => "joy for jump Jump,"
*/
function reverseSentence(sentence){
  let words = sentence.split(' ')
  let reverseWords = [];
  for(var i = words.length - 1; i >= 0; i--) {
    reverseWords.push(words[i]);
  }
  return reverseWords.join(' ');
}

/******************************************************************************
** Write a function fizzBuzz(max) that returns an array of numbers under
** the max. Each number should be either divisible by 3 or 5, BUT NOT BOTH.
** Example:
** fizzBuzz(20) => [3, 5, 6, 9, 10, 12, 18]
*/
function fizzBuzz(max){
  let results = [];
  let integer = 1;
  while(integer < max){
    if( integer % 3 === 0 && integer % 5 !== 0 ) {
      results.push(integer)
    } else if (integer % 5 === 0 && integer % 3 !== 0 ) {
      results.push(integer)
    }
    integer++
  }
  return results;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = {
  range : range,
  unique : unique,
  elementCount : elementCount,
  reverseSentence : reverseSentence,
  fizzBuzz : fizzBuzz
};
