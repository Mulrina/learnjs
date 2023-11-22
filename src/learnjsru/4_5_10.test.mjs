function sortyByAge(arr) {
  // если a.age > b.age, тогда индекс увеличиваем на 1, в противном случае - уменьшвем на -1
  // используется условный оператор "?"
  return arr.sort((a, b) => a.age > b.age ? 1 : -1) 
}

it ('Отсортировать пользователей по возрасту', () => {
  const vasya = { name: "Вася", age: 25 }
  const petya = { name: "Петя", age: 30 }
  const masha = { name: "Маша", age: 28 }

  const users = [ vasya, petya, masha ]
  const result = sortyByAge(users)

  expect(result).toStrictEqual([ vasya, masha, petya ])
  
  expect(result[0].name).toStrictEqual('Вася')  
  expect(result[1].name).toStrictEqual('Маша')
  expect(result[2].name).toStrictEqual('Петя')
})