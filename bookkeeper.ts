function stockList(listOfArt, listOfCat){
  // ...
  const arrayResponse = listOfCat.map(cat => {
    const matchArt = listOfArt.filter(art => art.charAt(0) === cat);
    let count = 0;
    if (!matchArt.length) return `(${cat} : 0)`
    matchArt.forEach(str => {
      const number = Number(str.substring(str.indexOf(' ') + 1));
      count += number;
    })
    if (count) return `(${cat} : ${count})`
    
  })
  return arrayResponse.join(" - ").trim();
}

//https://www.codewars.com/kata/54dc6f5a224c26032800005c/train/javascript