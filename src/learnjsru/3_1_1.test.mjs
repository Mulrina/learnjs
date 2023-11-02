it('Привет, object', () => {
    let user = {}
    expect(user).toBeDefined()
    expect(user).toEqual({})
    user.name = 'John'
    expect('name' in user).toBeTruthy()
    expect(user.name).toBe('John')
    expect(Object.keys(user)).toEqual(['name'])
    expect(user).toEqual({ name: 'John' })
    user.lastName = 'Smith'
    expect(user.lastName).toBe('Smith')
    user.name = 'Pete'
    expect(user.name).toBe('Pete')
    delete user.name 
    expect(user).toEqual({ lastName: 'Smith' })
    expect(user.name).toBeUndefined()
})

