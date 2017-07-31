let sum_pairs = (ints, s) => {
  let results;
  let minIndexDifference = ints.length
    for(i = 0; i <= ints.length; i++) {
      for(j = i + 1; j <= ints.length - 1; j++) {
        if(ints[i] + ints[j] === s) {
          indexDifference = j - i;
          if( indexDifference < minIndexDifference) {
            minIndexDifference = indexDifference
            results = [ints[i], ints[j] ];
          }
        }
      }
    }
  if (results === undefined) {
    return undefined;
  } else {
    return results;
  }
}
