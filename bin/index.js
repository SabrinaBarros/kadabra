#!/usr/bin/env node

const kadabra = require('../src/kadabra')

if (process.argv[2] === '-d') {

  const response = kadabra.decrypt(process.argv[3], process.argv[4])
  console.log(response)

} else {

  const response = kadabra.encrypt(process.argv[2], process.argv[3])
  console.log(response)

}