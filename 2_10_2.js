// Название JavaScript

// Используя конструкцию if..else, напишите код, который будет спрашивать: „Какое «официальное» название JavaScript?“

// Если пользователь вводит «ECMAScript», то показать: «Верно!», в противном случае – отобразить: «Не знаете? ECMAScript!»

function main() {
  let name = ('Какое «официальное» название JavaScript?', '') // Ругается тут, сначала думала prompt.
 // Как оказалось, без него тоже ругается. Что делать?
  if (name == 'ECMAScript') {
  console.log('Correctly!')
  } else { 
  console.log('Do not know? ECMAScript!')
}} 

main() 
