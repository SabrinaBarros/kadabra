const dictionary = require('../db/dictionary')

const getDictionaryIndexes = text => {

  return Array.from(text).map(letter => dictionary.indexOf(letter))

}

module.exports = getDictionaryIndexes