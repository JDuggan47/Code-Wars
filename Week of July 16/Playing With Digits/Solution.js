let digPow = (n, p) => {
  let string = n.toString();
  let sum = 0;

  for(i = 0; i < string.length; i++) {
    let digit = parseInt(string[i]);
    sum += Math.pow(digit, p)
    p+= 1;
  }

  p = p - string.length

  if(sum % n === 0) {
    return sum / n
  } else {
    return -1;
  }
}
