function filterRange(arr, a, b) {
  return arr 
    .filter(element => {
      return element >= a && element <= b
    })
}

it('Фильтрация по диапозону', () => {
  const arr = [5, 4, 7, 3, 1]
  const result = filterRange(arr, 1, 4)

  expect(result).toStrictEqual([4, 3, 1])
})