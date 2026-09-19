const test = require('node:test')
const assert = require('node:assert')
const { add, subtract } = require('../src/calculator')

test('add should return the sum of two numbers', () => {
    assert.strictEqual(add(2, 3), 5)
})

test('subtract should return the difference of two numbers', () => {
    assert.strictEqual(subtract(5, 3), 2)
})
