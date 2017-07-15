let isValidWalk = (walk) => {
 let xSum = 0;
 let ySum = 0;

 if(walk.length !== 10) {
   return false;
 } else {
   for(i = 0; i < walk.length; i++) {
     if(walk[i] === 'n') {
       ySum += 1;
     } else if(walk[i] === 'e') {
       xSum += 1;
     } else if(walk[i]=== 's') {
       ySum -= 1
     } else if(walk[i] === 'w') {
       xSum -= 1;
     }
   }
 }
 return xSum === 0 && ySum === 0;
}
