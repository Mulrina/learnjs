function copySorted(arr) {
  // сортировать по алфвиту с помощью .sort(), затем скопировать в новый массив, используя .slice()
  return arr.slice().sort()
  // return [...arr].sort()
}

it('Скопировать и отсортировать массив', () => {
  const arr = ['HTML', 'JavaScript', 'CSS']
  const result = copySorted(arr)

  expect(result).toStrictEqual(['CSS', 'HTML', 'JavaScript'])
  expect(arr).toStrictEqual(['HTML', 'JavaScript', 'CSS'])
})
