import { describe, it } from 'node:test'
import assert from 'node:assert'

describe('Результат присваивания', () => {
  it('Работает корректно', () => {
    let a = 2
    let x = 1 + (a *= 2)
  
    assert.strictEqual(x, 5)
  })
})
