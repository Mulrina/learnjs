// [0, 1, 1, 0, 1, 0]
// [1, 0, 0, 0, 1]
// [0, 0, 1, 1]

function isPalindrome(str) {
  // for (let i = 0; i < str.length; i++) { 
  //   const n = str.length - 1
  //   const j = n - i
  //   if (str[i] !== str[j]) {
  //     return false
  //   }
  // }

  // return true

  let i = 0
  let j = str.length - 1

  while(i <= j) {
    const lChar = str[i]
    const rChar = str[j]

    if (lChar === ' ') {
      i += 1
      continue
    }
    if (rChar === ' ') {
      j -= 1
      continue
    }

    if (lChar !== rChar) {
      return false
    }

    i += 1
    j -= 1
  }

  return true
}

describe('finds palindromes', () => {
  it('шалаш', () => {
    const string = 'шалаш'
    const result = isPalindrome(string)
    expect(result).toBeTruthy()
  })

  it('а роза упала на лапу азора', () => {
    const string = 'а роза упала на лапу азора'
    const result = isPalindrome(string)
    expect(result).toBeTruthy()
  })
})