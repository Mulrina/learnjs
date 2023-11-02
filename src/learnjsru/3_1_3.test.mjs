function sum(salaries) {
    let summ = 0
    for (let name in salaries) {
        const salary = salaries[name]
        summ += salary
    }
    return summ
}

it('Сумма свойств объекта', () => {
    let salaries = {
        John: 100,
        Ann: 160,
        Pete: 130
    }
    let result = sum(salaries)
    expect(result).toBe(390)
})

it('Сумма свойств объекта 2', () => {
    let salaries = {
        Arny: 1,
        Mira: 1,
    }
    let result = sum(salaries)
    expect(result).toBe(2)
})