const dictionary = [
  ' ', '!', '\"', '#', '$', '%', '&', '\'', '(', ')', '*', '+', ',', '-', '.', '/',
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
  ':', ';', '<', '=', '>', '?', '@',
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
  'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
  '[', '\\', ']', '^', '_', '`',
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
  'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
  '{', '|', '}', '~'
]

const kadabra = {

  encrypt(phrase, key) {

    // ato 1

    const phraseIndexs = Array.from(phrase).map(letter => dictionary.indexOf(letter))

    let keyIndexs = Array.from(key).map(letter => dictionary.indexOf(letter))

    // ato 2 terra formar

    const fakeKeyIndexs = keyIndexs

    while(keyIndexs.length < phraseIndexs.length) {

      keyIndexs = keyIndexs.concat(fakeKeyIndexs)
    }

    if(keyIndexs.length > phraseIndexs.length) {

      keyIndexs = keyIndexs.slice(0, phraseIndexs.length)

    }

    // Merge

    const hashIndex = phraseIndexs.map((item, indice) => item + keyIndexs[indice])

    const hash = hashIndex.map((item, indice) => {

      if (item > (dictionary.length - 1)) {

        item = item - (dictionary.length - 1)

      }

      return dictionary[item]

    })

    return hash.join('')
  },
  dcrypt(hash, key) {


  },

}

module.exports = kadabra