function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function camelize(str) {
  return str
    .split('-')
    .map((str, index) => {
      if (index === 0) { return str }
      return capitalizeFirstLetter(str)
    })

    // .map(function(element) {
    //   return capitalizeFirstLetter(str)
    // })

    // .map(capitalizeFirstLetter)
    .join('')
} 

it('Переведите текст вида border-left-width в borderLeftWidth', () => {
  expect(camelize('background-color')).toBe('backgroundColor')
  expect(camelize('list-style-image')).toBe('listStyleImage')
  expect(camelize('-webkit-transition')).toBe('WebkitTransition')
})