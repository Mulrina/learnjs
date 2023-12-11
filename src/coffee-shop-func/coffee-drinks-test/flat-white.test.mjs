import { createCoffeeMachine } from '../coffee-machine.mjs'
import { FLAT_WHITE } from '../coffee-types.mjs'
import { createRawBeans, createWater, createMilk } from '../ingredients.mjs'

  it('Flat White', () => {
    const beans = createRawBeans(1500)
    const water = createWater(2000)
    const drink = FLAT_WHITE
    const milk = createMilk(1000)

    const coffeeMachine = createCoffeeMachine()
    coffeeMachine.addBeans(beans)
    coffeeMachine.addWater(water)
    coffeeMachine.addMilk(milk)
    coffeeMachine.selectDrink(drink)
    const flat_white = coffeeMachine.start()

    expect(flat_white).toBeDefined()
    expect(flat_white.type).toBe(FLAT_WHITE)
    expect(coffeeMachine.drink).toBe(FLAT_WHITE)
    expect(flat_white.volume).toBe(200)
    expect(flat_white.temperature).toBe(65.5)
    expect(coffeeMachine.water.value).toBe(2000-40)
    expect(coffeeMachine.beans.value).toBe(1500-17.5)
    expect(coffeeMachine.milk.value).toBe(1000-160)
  })
