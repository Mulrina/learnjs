function decrease(arr) {
  return arr 
    .sort((a, b) => b - a)
}

it('Сортировать в порядке по убыванию', () => {
  const arr = [5, -6, 7, 4, 2, 3, -1]
  const result = decrease(arr)
  
  expect(result).toStrictEqual([7, 5, 4, 3, 2, -1, -6])
}) 
