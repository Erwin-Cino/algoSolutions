function order(words){
  // ...
  if (!words) return ""
  const regex = /\d/g;
  const split = words.split(' ')
  const findIndex = words.match(regex).sort().map(position => {
    return split.find(word => word.includes(position))
  }).join(' ');
  return findIndex
}

function order2(words){
  
    return words.split(' ').sort(function(a,b){
      return a.match(/\d/) - b.match(/\d/);
    }).join(' ');
  }