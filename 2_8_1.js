// Постфиксная и префиксная формы

function main() {
  let a = 1, b = 1

  ++a
  b++

  let c = ++a
  let d = b++

  console.log('c =', c)
  console.log('d =', d)
  console.log('a =', a)
  console.log('b =', b)
}

main()
