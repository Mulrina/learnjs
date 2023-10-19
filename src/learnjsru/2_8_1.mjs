import { describe, it } from 'node:test'
import assert from 'node:assert'

describe('Постфиксная и префиксная формы', () => {
  it('работает корректно', () => {
    let a = 1, b = 1

    ++a
    b++

    let c = ++a
    let d = b++

    assert.strictEqual(c, 3, 'c')
    assert.strictEqual(d, 2, 'd')
    assert.strictEqual(a, 3, 'a')
    assert.strictEqual(b, 3, 'b')
  })  
})
