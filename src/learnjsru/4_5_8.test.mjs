function mapMass(arr) {
  return arr.map(item => item.name)
}

it ('Трансформировать в массив имён', () => {
  const vasya = { name: 'Vasya', age: 25}
  const petya = { name: 'Petya', age: 30}
  const masha = { name: 'Masha', age: 28}

  const users = [ vasya, petya, masha ]

  let result = mapMass(users)

  expect(result).toStrictEqual([ 'Vasya', 'Petya', 'Masha' ])
})