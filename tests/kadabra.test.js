const { expect } = require('chai')
const kadabra = require('../src/kadabra')

describe('Should encrypt', () => {

  it('URL phrase > Key', () => {

    expect(kadabra.encrypt('https://github.com', ':3Octocat')).to.be.equal('$)EUi+rp]%)9ZX}HRc')

  })

  it('E-mail phrase > Key', () => {

    // eslint-disable-next-line quotes
    expect(kadabra.encrypt('my-mail123@email.com', 'secretKey')).to.be.equal("b`paH_9v-('JaH_9s^dT")

  })

  it('Lower case phrase > lower case key', () => {

    expect(kadabra.encrypt('kadabra', 'abra')).to.be.equal('NEXDEVU')

  })

  it('Lower case phrase < lower case key', () => {

    expect(kadabra.encrypt('abra', 'kadabra')).to.be.equal('NEXD')

  })

  it('Lower case phrase & lower case key', () => {

    expect(kadabra.encrypt('fairy', 'zelda')).to.be.equal('bHWX\\')

  })

  it('Lower case phrase > camel case key', () => {

    expect(kadabra.encrypt('rayquaza', 'oniX')).to.be.equal('cQdKfQe;')

  })

  it('Lower case phrase > upper case key', () => {

    expect(kadabra.encrypt('clafairy', 'MEW')).to.be.equal('23:5(BA@')

  })

  it('Upper case phrase & lower case key', () => {

    expect(kadabra.encrypt('PSYDUCK', 'porygon')).to.be.equal('BDM?>4;')

  })

  it('Sentence case phrase < lower case key', () => {

    expect(kadabra.encrypt('Abra', 'kadabra')).to.be.equal('.EXD')

  })

  it('Sentence case phrase > numeric key', () => {

    // eslint-disable-next-line quotes
    expect(kadabra.encrypt('Oddish', '123')).to.be.equal("`vwz'{")

  })

  it('Integer phrase > proper case key', () => {

    expect(kadabra.encrypt('123456', 'Ho-Ho')).to.be.equal('Y#@\\&^')

  })

  it('Integer phrase < integer key', () => {

    expect(kadabra.encrypt('3497', '750424209')).to.be.equal('JIIK')

  })

  it('Float phrase > lower case key', () => {

    expect(kadabra.encrypt('1,876.36', 'cleffa')).to.be.equal('tx}}|ov$')

  })

  it('Special characters phrase > Float key', () => {

    expect(kadabra.encrypt('GOLBAT#042', '355,82')).to.be.equal('ZdaNYf6EI>')

  })

  it('Special characters phrase > Mixed key', () => {

    expect(kadabra.encrypt('C@t&rp!ie', 'n010')).to.be.equal('3P\'6b"2yU')

  })

  it('Special characters phrase < Text key', () => {

    expect(kadabra.encrypt('p@ras p@r@$', 'parasect')).to.be.equal('b#fDheU6d#v')

  })

  it('Special characters phrase > Lower case key', () => {

    expect(kadabra.encrypt('p!Ch*', 'number 026')).to.be.equal('`v2Lo')

  })

  it('Special characters phrase < Special characters key', () => {

    expect(kadabra.encrypt('{+_]', '#$%}?:~')).to.be.equal('~/d\\')

  })

  it('Special characters phrase > Special characters key (1)', () => {

    expect(kadabra.encrypt('%$¨%(', '&!*')).to.be.equal('+%)+)')

  })

  it('Special characters phrase > Special characters key (2)', () => {

    expect(kadabra.encrypt('bl@$t0!S&', '#N*009')).to.be.equal('e<J4&I$#0')

  })

})