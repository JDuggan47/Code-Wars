let persistence = (num) => {
  let total = 0;

  while (num >= 10) {
    let str = num.toString();
    let product = 1;

    for(let i = 0; i < str.length; i++) {
      let integer = parseInt(str[i])
      product *= integer;
      num = product
    }
    total++;
  }

  return total;
}
