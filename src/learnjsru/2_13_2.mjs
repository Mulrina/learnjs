import { describe, it } from 'node:test'
import assert from 'node:assert'

describe('Значение цикла while', () => {
  it('Вывод: 1234', () => {
    let result = ''
    let i = 0
    while(++i < 5) {
      result += `${i}`
    }
    
    assert.strictEqual(result, '1234')
  })
    

  it('Вывод: 12345', () => {
    let result = ''
    let i = 0
    while(i++ < 5) {
      result += `${i}`
    }
    
    assert.strictEqual(result, '12345')
  })
})
