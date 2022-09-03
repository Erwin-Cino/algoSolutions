function firstNonRepeatingLetter(s) {
  // Add your code here
  const letters = s.split('');
  if (letters.length === 1) return letters[0];
  const smallLetters = [...letters].map(l => l.toLowerCase());
  const arrayBool = []
  smallLetters.forEach((letter, index, self) => {
    const selfCopy = [...self]
    selfCopy.splice(selfCopy.indexOf(letter), 1);
    if (selfCopy.includes(letter)) {
      arrayBool.push(false)
    } else {
      arrayBool.push(true)
    }
  })
  if (arrayBool.includes(true)) {
    return letters[arrayBool.indexOf(true)]
  } else {
    return ""
  }
}