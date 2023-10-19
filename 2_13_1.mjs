import { describe, it } from 'node:test'
import assert from 'node:assert'

describe('Последнее значение цикла', () => {
  it('Вывод: 3', () => {
    let i = 3
    
    let v = i--
    
    assert.strictEqual(v, 3)
  })

  it('Вывод: 2', () => {
    let v = 2
    
    let b = v--

    assert.strictEqual(b, 2)
  })  

  it('Вывод: 1', () => {
    let b = 1

    let n = b-- // результат в итоге будет = 0

    assert.strictEqual(n, 1)
  })
})
