/* global describe, it */
'use strict'
const assert = require('assert')
const expect = require('chai').expect
const should = require('chai').should()
const multiply = require('../multiply')

describe('multiply with assert', () => {
  it('should return correct result of 5 x 10', () => {
    assert.equal(multiply(5, 10), (5 * 10))
  })
})

describe('multiply with expect', () => {
  it('should return correct result of 5 x 10', () => {
    expect(multiply(5, 10)).to.equal(5 * 10)
  })
})

describe('multiply with should', () => {
  it('should return correct result of 5 x 10', () => {
    multiply(5, 10).should.equal(5 * 10)
  })
})
