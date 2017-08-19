let deleteNth = (arr,x) => {
  let count = 0;
  let results = [];

  for(i=0; i < arr.length; i++) {
    if(arr[i] !== arr[i - 1]) {
      count = 0;
      if(results.indexOf(arr[i]) === -1) {
        results.push(arr[i]);
      } else {
        for(i=0; i < results.length; i++) {
          if (results[i] === arr[i]) {
            count++
          }
        }
          if(count <= x) {
            results.push(arr[i])
          }
      }
    } else if(arr[i] === arr[i - 1]) {
      count++;
      if(count < x) {
        results.push(arr[i]);
      }
    }
  }

  return results;
}
