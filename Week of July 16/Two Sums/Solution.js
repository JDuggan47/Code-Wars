function twoSum(numbers, target) {
  let results = [];
    for (var i = 0; i < numbers.length-1; i++) {
        for (var j = i+1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) {
              results.push(i,j)
            }
        }
    }

  return results
}
