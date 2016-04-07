const expect = require('chai').expect
const multiply = require('../multiply')

describe('multiply with expect', () => {
  it('should return correct result of 5 x 10', () => {
    expect(multiply(5, 10)).to.equal(5 * 10)
  })
})
