function multiplyNumeric(obj) {
    let result = Object.assign({}, obj)
    for (let key in result) {
        const value = result[key]
        if(typeof value === 'number') {
            result[key] *= 2
        }
    }
    return result 
}

it('Умножвем все числовые свойства на 2', () => {
    let menu ={
        width: 200, 
        height: 300, 
        title: 'My menu'
    }
    let result = multiplyNumeric(menu) 
    let expected = {
        width: 400,
        height: 600,
        title: "My menu"  
    }
    expect(result).toEqual(expected)
})