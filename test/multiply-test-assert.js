const assert = require('assert')
const multiply = require('../multiply')

describe('multiply with assert', () => {
  it('should return correct result of 5 x 10', () => {
    assert.equal(multiply(5, 10), (5 * 10))
  })
})
