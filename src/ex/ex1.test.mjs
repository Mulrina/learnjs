function findDuplicates(arr) {
  // const result = []  
  // for (let i = 0; i < arr.length; i++) {
  //   const value = arr[i]
  //   for (let j = i+1; j < arr.length; j++) {
  //     const value2 = arr[j]
  //     if (value === value2) {
  //       result.push(value2)
  //     }
  //   }
  // }
  // return result
  const values = {}

  /*
  {
    value: number,
    count: 1
  }

  */

  for (let i = 0; i < arr.length; i++) {
    const value = arr[i]

    if (values[value]?.count > 0) {
      values[value].count += 1 
    } else {
      values[value] = {
        value: value,
        count: 1
      }
    }
  }

  const result = Object.values(values)
    .filter(value => value.count > 1)
    .map(value => value.value)
  return result
}

describe('Duplicate integers', () => {
  it('finds duplicate integers', () => {
    const arr = [1, 2, 3, 4, 8, 4, 7, 1, 1]

    const result = findDuplicates(arr)

    expect(result).toStrictEqual([1, 4])
  })

  it('finds zero duplicate integers', () => {
    const arr = [1, 2, 3, 4]

    const result = findDuplicates(arr)

    expect(result).toStrictEqual([])
  })
})