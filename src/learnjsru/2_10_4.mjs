// Перепишите 'if' в '?'

function main() {
  let result

  if (a + b < 4) {
    result = 'Мало'
  } else {
    result = 'Много'
  }  
}

import { strict as assert } from 'node:assert'
import assert from 'node:assert/strict'

// переписанная версия кода

function main_1() {
  let result
  let a = prompt('Введите число', 3)
  let b = prompt('Введите число', 4)
  let v = (a + b < 4)
  result = (v) ? 'Мало' : 'Много'
}

main_1() 
