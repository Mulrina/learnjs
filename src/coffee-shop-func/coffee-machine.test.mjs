import { createCoffeeMachine } from './coffee-machine.mjs'
import { ESPRESSO, DOUBLE_ESPRESSO, SMALL_LATTE, CAPPUCCINO } from './coffee-types.mjs'
import { createRawBeans, createWater, createMilk } from './ingredients.mjs'
import { cappuccino, espresso, smallLatte } from './recipes.mjs'

describe('Coffee machine', () => {
  it('Displayies drinks', () => {
    const coffeeMachine = createCoffeeMachine([
      espresso,
      smallLatte
    ])
    expect(coffeeMachine.drinks).toBeDefined()
    expect(coffeeMachine.drinks.length).toBe(2)
    expect(coffeeMachine.drinks).toEqual([ESPRESSO, SMALL_LATTE])
  })

  it('Espresso', () => {
    const beans = createRawBeans(1500)
    const water = createWater(2000)
    const drink = ESPRESSO

    const coffeeMachine = createCoffeeMachine()
    coffeeMachine.addBeans(beans)
    coffeeMachine.addWater(water)
    coffeeMachine.selectDrink(drink)
    const espresso = coffeeMachine.start()

    expect(espresso).toBeDefined()
    expect(espresso.type).toBe(ESPRESSO)
    expect(coffeeMachine.drink).toBe(ESPRESSO)
    expect(espresso.volume).toBe(20)
    expect(espresso.temperature).toBe(92.3)
    expect(coffeeMachine.water.volume).toBe(2000-20)
    expect(coffeeMachine.beans.weight).toBe(1500-8.75)
  })

  it('Double espresso', () => {
    const beans = createRawBeans(1500)
    const water = createWater(2000)
    const drink = DOUBLE_ESPRESSO

    const coffeeMachine = createCoffeeMachine()
    coffeeMachine.addBeans(beans)
    coffeeMachine.addWater(water)
    coffeeMachine.selectDrink(drink)
    const doubleEspresso = coffeeMachine.start()

    expect(doubleEspresso).toBeDefined()
    expect(doubleEspresso.type).toBe(DOUBLE_ESPRESSO)
    expect(coffeeMachine.drink).toBe(DOUBLE_ESPRESSO)
    expect(doubleEspresso.volume).toBe(40)
    expect(doubleEspresso.temperature).toBe(92.3)
    expect(coffeeMachine.water.volume).toBe(2000-40)
    expect(coffeeMachine.beans.weight).toBe(1500-17.5)   
  })

  it('Small latte', () => {
    const beans = createRawBeans(1500)
    const water = createWater(2000)
    const milk = createMilk(1000)
    const drink = SMALL_LATTE

    const coffeeMachine = createCoffeeMachine()
    coffeeMachine.addBeans(beans)
    coffeeMachine.addWater(water)
    coffeeMachine.addMilk(milk)
    coffeeMachine.selectDrink(drink)
    const smallLatte = coffeeMachine.start()

    expect(smallLatte).toBeDefined()
    expect(smallLatte.type).toBe(SMALL_LATTE)
    expect(coffeeMachine.drink).toBe(SMALL_LATTE)
    expect(smallLatte.volume).toBe(200)
    expect(smallLatte.temperature).toBe(65.5)
    expect(coffeeMachine.water.volume).toBe(2000-20)
    expect(coffeeMachine.beans.weight).toBe(1500-8.75)  
    expect(coffeeMachine.milk.volume).toBe(1000-180)
  })

  it('Cappuccino', () => {
    const beans = createRawBeans(1500)
    const water = createWater(2000)
    const drink = CAPPUCCINO
    const milk = createMilk(1000)

    const coffeeMachine = createCoffeeMachine()
    coffeeMachine.addBeans(beans)
    coffeeMachine.addWater(water)
    coffeeMachine.addMilk(milk)
    coffeeMachine.selectDrink(drink)
    const cappuccino = coffeeMachine.start()

    expect(cappuccino).toBeDefined()
    expect(cappuccino.type).toBe(CAPPUCCINO)
    expect(coffeeMachine.drink).toBe(CAPPUCCINO)
    expect(cappuccino.volume).toBe(250)
    expect(cappuccino.temperature).toBe(65.5)
    expect(coffeeMachine.water.volume).toBe(2000-40)
    expect(coffeeMachine.beans.weight).toBe(1500-17.5)
    expect(coffeeMachine.milk.volume).toBe(1000-210)
  })

  it('Throws error when select drink not included in recipes', () => {
    const coffeeMachine = createCoffeeMachine([])

    expect(coffeeMachine).toBeDefined()
    expect(coffeeMachine.drinks.length).toBe(0)
    expect(() => { coffeeMachine.selectDrink('UKNOWN') }).toThrowError()
  })

  it('Throws error when there are no ingredients', () => {
    const coffeeMachine = createCoffeeMachine()
    coffeeMachine.selectDrink(ESPRESSO)
    expect(() => { coffeeMachine.start() }).toThrow()
  })

  it('Throws error when there are not enough beans', () => {
    const beans = createRawBeans(1)
    const water = createWater(2000)
    const milk = createMilk(1000)

    const coffeeMachine = createCoffeeMachine()
    coffeeMachine.addBeans(beans)
    coffeeMachine.addWater(water)
    coffeeMachine.addMilk(milk)
    coffeeMachine.selectDrink(ESPRESSO)
    expect(() => { coffeeMachine.start() }).toThrow('Not enough beans')
  })

  it('Throws error when there are not enough water', () => {
    const beans = createRawBeans(1500)
    const water = createWater(2)
    const milk = createMilk(1000)

    const coffeeMachine = createCoffeeMachine()
    coffeeMachine.addBeans(beans)
    coffeeMachine.addWater(water)
    coffeeMachine.addMilk(milk)
    coffeeMachine.selectDrink(ESPRESSO)
    expect(() => { coffeeMachine.start() }).toThrow('Not enough water')
  })

  it('Throws error when there are not enough milk', () => {
    const beans = createRawBeans(1500)
    const water = createWater(2000)
    const milk = createMilk(1)

    const coffeeMachine = createCoffeeMachine()
    coffeeMachine.addBeans(beans)
    coffeeMachine.addWater(water)
    coffeeMachine.addMilk(milk)
    coffeeMachine.selectDrink(SMALL_LATTE)
    expect(() => { coffeeMachine.start() }).toThrow('Not enough milk')
  })

  it('Thows error when there are not enough milk and beans', () => {
    const beans = createRawBeans(1)
    const water = createWater(2000)
    const milk = createMilk(1)

    const coffeeMachine = createCoffeeMachine()
    coffeeMachine.addBeans(beans)
    coffeeMachine.addWater(water)
    coffeeMachine.addMilk(milk)
    coffeeMachine.selectDrink(SMALL_LATTE)
    expect(() => { coffeeMachine.start() }).toThrow('Not enough milk and beans')
  })

})