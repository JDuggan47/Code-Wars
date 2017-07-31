let findOdd = (A) => {
 let myObj = {};

 for( i = 0; i < A.length; i++) {
   if(myObj[A[i]] === undefined) {
     myObj[A[i]] = 1;
   } else {
     myObj[A[i]] += 1;
   }
 }

  for(var key in myObj) {
    if(myObj[key] % 2 !== 0) {
      return parseInt(key);
    }
  }
};
