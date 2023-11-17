function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    let value = arr[i]

    if (value < a && value > b) {
      arr.slice(i, 1)
      i--
    }
  }
}

it('Фильтрация по диапазону "на месте"', () => {
  const arr = [5, 4, 6, 7, 3, 2, 1]
  const result = filterRangeInPlace(arr, 1, 4)

  console.log(result)
  // expect(result).toBe([3, 2])
})