const dictionary = require('../db/dictionary')

const getDictionaryCharacters = hashIndexes => hashIndexes.map(hashIndex => {

  const lastDictionaryIndex = dictionary.length - 1

  if (hashIndex > lastDictionaryIndex) {

    hashIndex = hashIndex - lastDictionaryIndex

  }

  return dictionary[hashIndex]

})

module.exports = getDictionaryCharacters