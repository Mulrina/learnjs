function switchIt(a) {
    let result = ''
    switch(a) {
    case 3:
        result = 'Маловато' 
        break
    case 4:
        result = 'в точку!'
        break
    case 5: 
        result = 'перебор'
        break
    default:
        result = 'нет таких значений'
    }
    return result
}

it('summ', () => {
    expect(switchIt(3)).toBe('Маловато')
    expect(switchIt(4)).toBe('в точку!')
    expect(switchIt(5)).toBe('перебор')
    expect(switchIt(7)).toBe('нет таких значений')
    expect(switchIt(1)).toBe('нет таких значений')
    expect(switchIt(-1)).toBe('нет таких значений')
})

