const should = require('chai').should()
const multiply = require('../multiply')

describe('multiply with should', () => {
  it('should return correct result of 5 x 10', () => {
    multiply(5, 10).should.equal(5 * 10)
  })
})
