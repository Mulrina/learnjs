import { describe, it } from 'node:test'
import assert from 'node:assert'

describe('Операции сравнения', () => {
  it() 
}



function main() {
  let a = 5 > 4 // true
  let b = "ананас" > "яблоко" // false (буква"а" в начале алфавита, она меньше "я")
  let c = "2" > "12" // true (первый символ в первой строке больше, чем первый символ второй строки (2 > 1))
  let n = undefined == null // true (нестрогое стравнеие)
  let v = undefined === null // false (строгое сравнение) 
  let m = null == "\n0\n" // false (null равен только undefined при нестрогом сравнении) 
  let f = null === +"\n0\n"  // false (строгое сравнение разных типов)

  console.log('a = ', a)
  console.log('b = ', b)
  console.log('c = ', c)
  console.log('n = ', n)
  console.log('v = ', v)
  console.log('m = ', m)
  console.log('f = ', f)
}

main() 
