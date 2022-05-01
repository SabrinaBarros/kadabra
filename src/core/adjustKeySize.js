const adjustKeySize = (keyIndexes, phraseIndexes) => {

  const fakeKeyIndexes = keyIndexes

  while (keyIndexes.length < phraseIndexes.length) {

    keyIndexes = keyIndexes.concat(fakeKeyIndexes)

  }

  if (keyIndexes.length > phraseIndexes.length) {

    keyIndexes = keyIndexes.slice(0, phraseIndexes.length)

  }

  return keyIndexes

}

module.exports = adjustKeySize