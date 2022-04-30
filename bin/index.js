#!/usr/bin/env node

const kadabra = require('../src/kadabra')

const response = kadabra.encrypt(process.argv[2], process.argv[3])

console.log(response)