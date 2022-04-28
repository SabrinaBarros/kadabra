const { expect } = require('chai')
const kadabra = require('../src/kadabra')

describe('Encrypt: lower case', () => {

  it('Should encrypt a phrase longer than the key', () => {

    expect(kadabra.encrypt('kadabra', 'abra')).to.be.equal('MDWCDUT')

  })

  it('Key longer than the phrase', () => {

    expect(kadabra.encrypt('abra', 'kadabra')).to.be.equal('COTM')

  })

})

describe('Should encrypt a uppercase case', () => {

  it('Phrase with uppercase', () => {

    expect(kadabra.encrypt('Abra', 'kadabra')).to.be.equal('-DWC')

  })

  it('Key with uppercase', () => {

    expect(kadabra.encrypt('rayquaza', 'oniX')).to.be.equal('bPcJePd:')

  })

  it('Phrase in CapsLock', () => {

    expect(kadabra.encrypt('PSYDUCK', 'porygon')).to.be.equal('ACL>=3:')

  })

  it('Key in CapsLock', () => {

    // eslint-disable-next-line quotes
    expect(kadabra.encrypt('clafairy', 'MEW')).to.be.equal("12=4'A@?")

  })

})

describe('Should encrypt a numeric case', () => {

  it('Numeric phrase', () => {

    expect(kadabra.encrypt('123456', 'Ho-Ho')).to.be.equal('-Y"@%^')

  })

  it('Numeric phrase with punctuation', () => {

    expect(kadabra.encrypt('1,876.36', 'cleffa')).to.be.equal('tx}}|ov#')

  })

  it('Numeric key with punctuation', () => {

    expect(kadabra.encrypt('GOLBAT#042', '355,82')).to.be.equal('ZdaNYf6EI>')

  })

  it('Numeric key', () => {

    expect(kadabra.encrypt('Oddish', '123')).to.be.equal('`vwz&{')

  })

  it('Numeric phrase and numeric key', () => {

    expect(kadabra.encrypt('3497', '750424209')).to.be.equal('JIIK')

  })

})