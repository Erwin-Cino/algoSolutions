function firstNonRepeatingLetter(s) {
  // Add your code here
  const letters = s.split('');
  if (letters.length === 1) return letters[0];
  const smallLetters = [...letters].map(l => l.toLowerCase());
  const arrayBool = []
  smallLetters.forEach((letter, index, self) => {
    const selfCopy = [...self]
    selfCopy.splice(selfCopy.indexOf(letter), 1);
    arrayBool.push(selfCopy.includes(letter))
  })
  if (arrayBool.includes(true)) {
    return letters[arrayBool.indexOf(true)]
  } else {
    return ""
  }
}