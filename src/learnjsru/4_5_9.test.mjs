function ussersMapped(arr) {
  return arr.map(user => ({
    fullname: `${user.name} ${user.surname}`, 
    id: user.id
  }))
}

it ('Трансформировать в объекты', () => {
  const vasya = { name: "Вася", surname: "Пупкин", id: 1 }
  const petya = { name: "Петя", surname: "Иванов", id: 2 }
  const masha = { name: "Маша", surname: "Петрова", id: 3 }

  const users = [ vasya, petya, masha ]

  const result = ussersMapped(users)

  expect(result).toStrictEqual([
    {"fullname": "Вася Пупкин", "id": 1}, 
    {"fullname": "Петя Иванов", "id": 2}, 
    {"fullname": "Маша Петрова", "id": 3}
  ])

  expect(result[0].id).toStrictEqual(1)
  expect(result[0].fullname).toStrictEqual('Вася Пупкин')
})