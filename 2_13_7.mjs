import { it } from 'node:test'
import assert from 'node:assert'

function getPrimeNumbers(n) {
  let result = ''
  nextEx:
    for (let i = 2; i <= n; i++) {

      for (let u = 2; u < i; u++) {
        if (i % u == 0) continue nextEx
      }

      result += i + ','
    }
  return result
}

it('Вывести простые числа для n = 10', () => {
  // Given
  const n = 10
  // When
  const result = getPrimeNumbers(n)
  // Then
  assert.strictEqual(result, '2,3,5,7,')
})

it('Вывести простые числа для n = 20', () => {
  // Given
  const n = 20
  // When
  const result = getPrimeNumbers(n)
  // Then
  assert.strictEqual(result, '2,3,5,7,11,13,17,19,')
})