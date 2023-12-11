import { createCoffeeMachine } from './coffee-machine.mjs'
import { LATTE_200, LATTE_250, LATTE_350} from './coffee-types.mjs'
import { createRawBeans, createWater, createMilk } from './ingredients.mjs'

  it('Latte 200', () => {
    const beans = createRawBeans(1500)
    const water = createWater(2000)
    const milk = createMilk(1000)
    const drink = LATTE_200

    const coffeeMachine = createCoffeeMachine()
    coffeeMachine.addBeans(beans)
    coffeeMachine.addWater(water)
    coffeeMachine.addMilk(milk)
    coffeeMachine.selectDrink(drink)
    const latte_200 = coffeeMachine.start()

    expect(latte_200).toBeDefined()
    expect(latte_200.type).toBe(LATTE_200)
    expect(coffeeMachine.drink).toBe(LATTE_200)
    expect(latte_200.volume).toBe(200)
    expect(latte_200.temperature).toBe(65.5)
    expect(coffeeMachine.water.value).toBe(2000-20)
    expect(coffeeMachine.beans.value).toBe(1500-8.75)  
    expect(coffeeMachine.milk.value).toBe(1000-180)
  })

  it('Latte 250', () => {
    const beans = createRawBeans(1500)
    const water = createWater(2000)
    const milk = createMilk(1000)
    const drink = LATTE_250

    const coffeeMachine = createCoffeeMachine()
    coffeeMachine.addBeans(beans)
    coffeeMachine.addWater(water)
    coffeeMachine.addMilk(milk)
    coffeeMachine.selectDrink(drink)
    const latte_250 = coffeeMachine.start()

    expect(latte_250).toBeDefined()
    expect(latte_250.type).toBe(LATTE_250)
    expect(coffeeMachine.drink).toBe(LATTE_250)
    expect(latte_250.volume).toBe(250)
    expect(latte_250.temperature).toBe(65.5)
    expect(coffeeMachine.water.value).toBe(2000-20)
    expect(coffeeMachine.beans.value).toBe(1500-8.75)  
    expect(coffeeMachine.milk.value).toBe(1000-230)
  })

  it('Latte 350', () => {
    const beans = createRawBeans(1500)
    const water = createWater(2000)
    const drink = LATTE_350
    const milk = createMilk(1000)

    const coffeeMachine = createCoffeeMachine()
    coffeeMachine.addBeans(beans)
    coffeeMachine.addWater(water)
    coffeeMachine.addMilk(milk)
    coffeeMachine.selectDrink(drink)
    const latte_350 = coffeeMachine.start()

    expect(latte_350).toBeDefined()
    expect(latte_350.type).toBe(LATTE_350)
    expect(coffeeMachine.drink).toBe(LATTE_350)
    expect(latte_350.volume).toBe(350)
    expect(latte_350.temperature).toBe(65.5)
    expect(coffeeMachine.water.value).toBe(2000-40)
    expect(coffeeMachine.beans.value).toBe(1500-17.5)
    expect(coffeeMachine.milk.value).toBe(1000-310)
  })