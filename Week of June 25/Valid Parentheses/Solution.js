let validParentheses = (parens) => {
  if (parens === '') {
    return false
  }

  let count1 = 0;
  let count2 = 0;
  let ary = parens.split('')

  if(ary[0] === ')') {
    return false
  } else if(ary[ary.length - 1] === '(') {
    return false;
  }

  for (i = 0; i <= ary.length; i++) {
    if(ary[i] === '(') {
      count1++
    } else if(ary[i] === ')') {
      count2++
    }
  }

  return count1 === count2;
}
