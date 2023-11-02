function isEmpty(schedule) {
    let key 
    for (key in schedule) {
        return false 
    }
    return true 
}

// console.log('true =', true)

it('Проверка на пустоту', () => {
    let schedule = {}
    expect(schedule).toBeDefined()
    expect(schedule).toEqual({})
    schedule['8:30'] = 'get up'
    delete schedule['8:30']
    expect(isEmpty(schedule)).toBeDefined()
    expect(isEmpty(schedule)).toBeTruthy()
})
