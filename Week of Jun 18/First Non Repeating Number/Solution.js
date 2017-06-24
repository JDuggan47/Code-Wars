let firstNonRepeatingLetter = (s) => {

 if(s === '') {
   return s;
 }

 let ary = s.split('');
 let countObj = {}

  for(i=0; i < ary.length; i++) {
    if(ary[i] === ary[i].toUpperCase() && ary[i] !== ',') {
      if(countObj[ary[i].toLowerCase()] !== undefined && countObj[ary[i]] === undefined) {
        countObj[ary[i]] = 1;
        countObj[ary[i].toLowerCase()] += 1;
      } else if(countObj[ary[i].toLowerCase()] === undefined && countObj[ary[i]] === undefined) {
        countObj[ary[i]] = 1;
      }
      else if( countObj[ary[i].toLowerCase()] !== undefined && countObj[ary[i]] !== undefined ) {
        countObj[ary[i]] += 1;
        countObj[ary[i].toLowerCase()] += 1;
      }
    }

    if( countObj[ary[i]] === undefined && countObj[ary[i].toUpperCase()] === undefined) {
     countObj[ary[i]] = 1;
    } else if( countObj[ary[i]] === undefined && countObj[ary[i].toUpperCase()] !== undefined) {
     countObj[ary[i]] = 1;
     countObj[ary[i].toUpperCase()] += 1;
    }
    else if(countObj[ary[i]] !== undefined && ary[i] !== ary[i].toUpperCase()) {
     countObj[ary[i]] += 1;
    }
  }

  for(var key in countObj) {
    if( countObj[key] === 1 ) {
      return key;
    }
  }

 return '';
}
