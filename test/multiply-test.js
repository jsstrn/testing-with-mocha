/* global describe, it */
const assert = require('assert')
const expect = require('chai').expect
const should = require('chai').should()
const multiply = require('../multiply')

describe('multiply with assert', function () {
  it('should return correct result of 5 x 10', function () {
    assert.equal(multiply(5, 10), (5 * 10))
  })
})

describe('multiply with expect', function () {
  it('should return correct result of 5 x 10', function () {
    expect(multiply(5, 10)).to.equal(5 * 10)
  })
})

describe('multiply with should', function () {
  it('should return correct result of 5 x 10', function () {
    multiply(5, 10).should.equal(5 * 10)
  })
})
