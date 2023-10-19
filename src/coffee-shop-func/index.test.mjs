function summ(a, b) {
  return a + b
}

it('summ', () => {
  expect(summ(1, 2)).toBe(3)
})