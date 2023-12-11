import { createCoffeeMachine } from '../coffee-machine.mjs'
import { CAPPUCCINO_200, CAPPUCCINO_250, CAPPUCCINO_350 } from './coffee-types.mjs'
import { createRawBeans, createWater, createMilk } from './ingredients.mjs'

  it('Cappuccino 200', () => {
    const beans = createRawBeans(1500)
    const water = createWater(2000)
    const milk = createMilk(1000)
    const drink = CAPPUCCINO_200

    const coffeeMachine = createCoffeeMachine()
    coffeeMachine.addBeans(beans)
    coffeeMachine.addWater(water)
    coffeeMachine.addMilk(milk)
    coffeeMachine.selectDrink(drink)
    const cappuccino_200 = coffeeMachine.start()

    expect(cappuccino_200).toBeDefined()
    expect(cappuccino_200.type).toBe(CAPPUCCINO_200)
    expect(coffeeMachine.drink).toBe(CAPPUCCINO_200)
    expect(cappuccino_200.volume).toBe(200)
    expect(cappuccino_200.temperature).toBe(65.5)
    expect(coffeeMachine.water.value).toBe(2000-20)
    expect(coffeeMachine.beans.value).toBe(1500-8.75)  
    expect(coffeeMachine.milk.value).toBe(1000-180)
  })

  it('Cappuccino 250', () => {
    const beans = createRawBeans(1500)
    const water = createWater(2000)
    const drink = CAPPUCCINO_250
    const milk = createMilk(1000)

    const coffeeMachine = createCoffeeMachine()
    coffeeMachine.addBeans(beans)
    coffeeMachine.addWater(water)
    coffeeMachine.addMilk(milk)
    coffeeMachine.selectDrink(drink)
    const cappuccino_250 = coffeeMachine.start()

    expect(cappuccino_250).toBeDefined()
    expect(cappuccino_250.type).toBe(CAPPUCCINO_250)
    expect(coffeeMachine.drink).toBe(CAPPUCCINO_250)
    expect(cappuccino_250.volume).toBe(250)
    expect(cappuccino_250.temperature).toBe(65.5)
    expect(coffeeMachine.water.value).toBe(2000-40)
    expect(coffeeMachine.beans.value).toBe(1500-17.5)
    expect(coffeeMachine.milk.value).toBe(1000-210)
  })

  it('Cappuccino 350', () => {
    const beans = createRawBeans(1500)
    const water = createWater(2000)
    const drink = CAPPUCCINO_350
    const milk = createMilk(1000)

    const coffeeMachine = createCoffeeMachine()
    coffeeMachine.addBeans(beans)
    coffeeMachine.addWater(water)
    coffeeMachine.addMilk(milk)
    coffeeMachine.selectDrink(drink)
    const cappuccino_350 = coffeeMachine.start()

    expect(cappuccino_350).toBeDefined()
    expect(cappuccino_350.type).toBe(CAPPUCCINO_350)
    expect(coffeeMachine.drink).toBe(CAPPUCCINO_350)
    expect(cappuccino_350.volume).toBe(350)
    expect(cappuccino_350.temperature).toBe(65.5)
    expect(coffeeMachine.water.value).toBe(2000-40)
    expect(coffeeMachine.beans.value).toBe(1500-17.5)
    expect(coffeeMachine.milk.value).toBe(1000-310)
  })