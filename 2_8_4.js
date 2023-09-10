// Исправьте сложение

function main() {
  // надо перевести строки в числа с помощью оператора +
  let a = prompt("Первое число?", 1) 
  let b = prompt("Второе число?", 2) // выходит ошибка 'prompt is not defined', почему?

  console.log(+a + +b)
}

main() 
