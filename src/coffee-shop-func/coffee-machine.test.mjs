import { createCoffeeMachine } from './coffee-machine.mjs'
import { ESPRESSO, DOUBLE_ESPRESSO, SMALL_LATTE } from './coffee-types.mjs'
import { createRawBeans, createWater, createMilk } from './ingredients.mjs'

describe('Coffee machine', () => {
  it('Displayies drinks', () => {
    const coffeeMachine = createCoffeeMachine()
    expect(coffeeMachine.drinks).toBeDefined()
    expect(coffeeMachine.drinks.length).toBe(3)
    expect(coffeeMachine.drinks).toEqual([ESPRESSO, DOUBLE_ESPRESSO, SMALL_LATTE])
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
})