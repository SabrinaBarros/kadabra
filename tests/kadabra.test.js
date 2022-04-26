const { expect } = require('chai')
const kadabra = require('../src/kadabra')

describe('kadabra', () => {

  it('Should return a Hello World', () => {

    expect(kadabra()).to.be.equal('hello world, I am a sad cowboy')

  })

})