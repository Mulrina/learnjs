function filterRangeInPlace(arr, a, b) {
  const deleteIndexes = []
  for (let i = 0; i < arr.length; i++) {
    let value = arr[i]

    if (value <= a || value >= b) {
      deleteIndexes.push(i)
      // arr.splice(i, 1)
      // i--
    }
  }
  for (let i = 0; i < deleteIndexes.length; i++) {
    const deleteIndex = deleteIndexes[i]
    // 0, 1, 2, 3, 6
    // [5, 4,6, 7, 3, 2, 1]
    // 1
    // [4, 6, 7, 3, 2, 1]
    arr.splice(deleteIndex - i, 1)
  }
}

it('Фильтрация по диапазону "на месте"', () => {
  const arr = [5, 4, 6, 7, 3, 2, 1]
  filterRangeInPlace(arr, 1, 4)

  console.log(arr)
  expect(arr).toStrictEqual([3, 2])
})