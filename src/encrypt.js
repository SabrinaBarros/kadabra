const getDictionaryIndexes = require('./core/getDictionaryIndexes')
const adjustKeySize = require('./core/adjustKeySize')
const getDictionaryCharacters = require('./core/getDictionaryCharacters')

const encrypt = (phrase, key) => {

  // Phrase to dictionary index conversion

  const phraseIndexes = getDictionaryIndexes(phrase)

  // Key to dictionary index conversion

  let keyIndexes = getDictionaryIndexes(key)

  // Key size adjustment to phrase size

  keyIndexes = adjustKeySize(keyIndexes, phraseIndexes)

  // Merge

  const hashIndexes = phraseIndexes.map((phraseIndex, index) => phraseIndex + keyIndexes[index])

  // Encrypting

  const hash = getDictionaryCharacters(hashIndexes)

  // Convert to string

  return hash.join('')

}

module.exports = encrypt