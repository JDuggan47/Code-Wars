function getMiddle(s){
  let ary = s.split('');
  for(i = 0; i < ary.length; i++) {
    if(ary.length % 2 === 0) {
      if(i === ary.length / 2 ) {
        return s[i-1] + s[i];
      }
    } else if (ary.length % 2 !== 0 && ary.length !== 1) {
        if (i === Math.floor(ary.length / 2) ) {
          return s[i];
      }
    } else {
      return s[i]
    }
  }
}

getMiddle('')
