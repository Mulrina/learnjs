import { describe, it } from 'node:test' 
import assert from 'node:assert'

function confirm(message) {
  return false
}

function checkAge(age) {
  if (age > 18) {
    return true
  }
  return confirm('Родители разрешили?') 
}

describe('Обязателен ли "else"?', () => {
  it('Вывод: true', () => {
    // Given 
    // 5 яблок
    // When
    // Съели 2 яблока
    // Then
    // Должно остаться 3 яблока

    // Given
    const age = 19
    // When 
    const result = checkAge(age)
    // Then
    assert.strictEqual(result, true)
  })
 
  it('Вывод: false', () => {
    // Given 
    const age = 17
    // When 
    const result = checkAge(age)
    // Then 
    assert.strictEqual(result, false)
  })
})

