let list = (names) => {
  let results = [];

  if(names.length === 0) {
    return '';
  } else if(names.length === 1) {
    return names[0].name;
  } else {
      for(var i = 0; i < names.length; i++) {
        if(i === names.length - 2){
          results.push(names[i].name)
        } else if(i === names.length - 1){
          results.push('& ' + names[i].name)
        } else {
          results.push(names[i].name + ',')
        }
      }
    return results.join(' ');
  }
}
