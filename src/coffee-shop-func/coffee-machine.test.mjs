import { createCoffeeMachine } from './coffee-machine.mjs'
import { ESPRESSO, DOUBLE_ESPRESSO, LATTE_200, LATTE_250, LATTE_350, CAPPUCCINO_200, CAPPUCCINO_250, CAPPUCCINO_350, FLAT_WHITE} from './coffee-types.mjs'
import { createRawBeans, createWater, createMilk } from './ingredients.mjs'
import { espresso, latte_200, cappuccino_200, flat_white, latte_250 } from './recipes.mjs'

describe('Coffee machine', () => {
  it('Displayies drinks', () => {
    const coffeeMachine = createCoffeeMachine([
      espresso,
      latte_200, 
      cappuccino_200, 
      flat_white
    ])
    expect(coffeeMachine.drinks).toBeDefined()
    expect(coffeeMachine.drinks.length).toBe(4)
    expect(coffeeMachine.drinks).toEqual([ESPRESSO, LATTE_200, CAPPUCCINO_200, FLAT_WHITE])
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
    expect(coffeeMachine.water.volume).toBe(2000-20)
    expect(coffeeMachine.beans.weight).toBe(1500-8.75)  
    expect(coffeeMachine.milk.volume).toBe(1000-180)
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
    expect(coffeeMachine.water.volume).toBe(2000-20)
    expect(coffeeMachine.beans.weight).toBe(1500-8.75)  
    expect(coffeeMachine.milk.volume).toBe(1000-230)
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
    expect(coffeeMachine.water.volume).toBe(2000-40)
    expect(coffeeMachine.beans.weight).toBe(1500-17.5)
    expect(coffeeMachine.milk.volume).toBe(1000-310)
  })

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
    expect(coffeeMachine.water.volume).toBe(2000-20)
    expect(coffeeMachine.beans.weight).toBe(1500-8.75)  
    expect(coffeeMachine.milk.volume).toBe(1000-180)
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
    expect(coffeeMachine.water.volume).toBe(2000-40)
    expect(coffeeMachine.beans.weight).toBe(1500-17.5)
    expect(coffeeMachine.milk.volume).toBe(1000-210)
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
    expect(coffeeMachine.water.volume).toBe(2000-40)
    expect(coffeeMachine.beans.weight).toBe(1500-17.5)
    expect(coffeeMachine.milk.volume).toBe(1000-310)
  })

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
    expect(coffeeMachine.water.volume).toBe(2000-40)
    expect(coffeeMachine.beans.weight).toBe(1500-17.5)
    expect(coffeeMachine.milk.volume).toBe(1000-160)
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
    coffeeMachine.selectDrink(LATTE_200)
    expect(() => { coffeeMachine.start() }).toThrow('Not enough milk')
  })

  it('Thows error when there are not enough beans', () => {
    const beans = createRawBeans(1)
    const water = createWater(2000)
    const milk = createMilk(1)

    const coffeeMachine = createCoffeeMachine()
    coffeeMachine.addBeans(beans)
    coffeeMachine.addWater(water)
    coffeeMachine.addMilk(milk)
    coffeeMachine.selectDrink(LATTE_200)
    expect(() => { coffeeMachine.start() }).toThrow('Not enough beans and milk')
  })

   it('Thows error when there are not enough milk and beans', () => {
    const beans = createRawBeans(1)
    const water = createWater(2000)
    const milk = createMilk(1)

    const coffeeMachine = createCoffeeMachine()
    coffeeMachine.addBeans(beans)
    coffeeMachine.addWater(water)
    coffeeMachine.addMilk(milk)
    coffeeMachine.selectDrink(LATTE_200)
    expect(() => { coffeeMachine.start() }).toThrow('Not enough beans and milk')
  })
 
  it('Throws error when there are not enough milk', () => {
    const beans = createRawBeans(1500)
    const water = createWater(2000)
    const milk = createMilk(1)

    const coffeeMachine = createCoffeeMachine()
    coffeeMachine.addBeans(beans)
    coffeeMachine.addWater(water)
    coffeeMachine.addMilk(milk)
    coffeeMachine.selectDrink(LATTE_250)
    expect(() => { coffeeMachine.start() }).toThrow('Not enough milk')
  })

  it('Thows error when there are not enough beans', () => {
    const beans = createRawBeans(1)
    const water = createWater(2000)
    const milk = createMilk(1)

    const coffeeMachine = createCoffeeMachine()
    coffeeMachine.addBeans(beans)
    coffeeMachine.addWater(water)
    coffeeMachine.addMilk(milk)
    coffeeMachine.selectDrink(LATTE_250)
    expect(() => { coffeeMachine.start() }).toThrow('Not enough beans and milk')
  })

   it('Thows error when there are not enough milk and beans', () => {
    const beans = createRawBeans(1)
    const water = createWater(2000)
    const milk = createMilk(1)

    const coffeeMachine = createCoffeeMachine()
    coffeeMachine.addBeans(beans)
    coffeeMachine.addWater(water)
    coffeeMachine.addMilk(milk)
    coffeeMachine.selectDrink(LATTE_250)
    expect(() => { coffeeMachine.start() }).toThrow('Not enough beans and milk')
  })

  it('Throws error when there are not enough milk', () => {
    const beans = createRawBeans(1500)
    const water = createWater(2000)
    const milk = createMilk(1)

    const coffeeMachine = createCoffeeMachine()
    coffeeMachine.addBeans(beans)
    coffeeMachine.addWater(water)
    coffeeMachine.addMilk(milk)
    coffeeMachine.selectDrink(LATTE_350)
    expect(() => { coffeeMachine.start() }).toThrow('Not enough milk')
  })

  it('Thows error when there are not enough beans', () => {
    const beans = createRawBeans(1)
    const water = createWater(2000)
    const milk = createMilk(1)

    const coffeeMachine = createCoffeeMachine()
    coffeeMachine.addBeans(beans)
    coffeeMachine.addWater(water)
    coffeeMachine.addMilk(milk)
    coffeeMachine.selectDrink(LATTE_350)
    expect(() => { coffeeMachine.start() }).toThrow('Not enough beans and milk')
  })

   it('Thows error when there are not enough milk and beans', () => {
    const beans = createRawBeans(1)
    const water = createWater(2000)
    const milk = createMilk(1)

    const coffeeMachine = createCoffeeMachine()
    coffeeMachine.addBeans(beans)
    coffeeMachine.addWater(water)
    coffeeMachine.addMilk(milk)
    coffeeMachine.selectDrink(LATTE_350)
    expect(() => { coffeeMachine.start() }).toThrow('Not enough beans and milk')
  })

  it('Throws error when there are not enough milk', () => {
    const beans = createRawBeans(1500)
    const water = createWater(2000)
    const milk = createMilk(1)

    const coffeeMachine = createCoffeeMachine()
    coffeeMachine.addBeans(beans)
    coffeeMachine.addWater(water)
    coffeeMachine.addMilk(milk)
    coffeeMachine.selectDrink(CAPPUCCINO_200)
    expect(() => { coffeeMachine.start() }).toThrow('Not enough milk')
  })

  it('Thows error when there are not enough beans', () => {
    const beans = createRawBeans(1)
    const water = createWater(2000)
    const milk = createMilk(1)

    const coffeeMachine = createCoffeeMachine()
    coffeeMachine.addBeans(beans)
    coffeeMachine.addWater(water)
    coffeeMachine.addMilk(milk)
    coffeeMachine.selectDrink(CAPPUCCINO_200)
    expect(() => { coffeeMachine.start() }).toThrow('Not enough beans and milk')
  })

   it('Thows error when there are not enough milk and beans', () => {
    const beans = createRawBeans(1)
    const water = createWater(2000)
    const milk = createMilk(1)

    const coffeeMachine = createCoffeeMachine()
    coffeeMachine.addBeans(beans)
    coffeeMachine.addWater(water)
    coffeeMachine.addMilk(milk)
    coffeeMachine.selectDrink(CAPPUCCINO_200)
    expect(() => { coffeeMachine.start() }).toThrow('Not enough beans and milk')
  })

  it('Throws error when there are not enough milk', () => {
    const beans = createRawBeans(1500)
    const water = createWater(2000)
    const milk = createMilk(1)

    const coffeeMachine = createCoffeeMachine()
    coffeeMachine.addBeans(beans)
    coffeeMachine.addWater(water)
    coffeeMachine.addMilk(milk)
    coffeeMachine.selectDrink(CAPPUCCINO_250)
    expect(() => { coffeeMachine.start() }).toThrow('Not enough milk')
  })

  it('Thows error when there are not enough beans', () => {
    const beans = createRawBeans(1)
    const water = createWater(2000)
    const milk = createMilk(1)

    const coffeeMachine = createCoffeeMachine()
    coffeeMachine.addBeans(beans)
    coffeeMachine.addWater(water)
    coffeeMachine.addMilk(milk)
    coffeeMachine.selectDrink(CAPPUCCINO_250)
    expect(() => { coffeeMachine.start() }).toThrow('Not enough beans and milk')
  })

   it('Thows error when there are not enough milk and beans', () => {
    const beans = createRawBeans(1)
    const water = createWater(2000)
    const milk = createMilk(1)

    const coffeeMachine = createCoffeeMachine()
    coffeeMachine.addBeans(beans)
    coffeeMachine.addWater(water)
    coffeeMachine.addMilk(milk)
    coffeeMachine.selectDrink(CAPPUCCINO_250)
    expect(() => { coffeeMachine.start() }).toThrow('Not enough beans and milk')
  })

  it('Throws error when there are not enough milk', () => {
    const beans = createRawBeans(1500)
    const water = createWater(2000)
    const milk = createMilk(1)

    const coffeeMachine = createCoffeeMachine()
    coffeeMachine.addBeans(beans)
    coffeeMachine.addWater(water)
    coffeeMachine.addMilk(milk)
    coffeeMachine.selectDrink(CAPPUCCINO_350)
    expect(() => { coffeeMachine.start() }).toThrow('Not enough milk')
  })

  it('Thows error when there are not enough beans', () => {
    const beans = createRawBeans(1)
    const water = createWater(2000)
    const milk = createMilk(1)

    const coffeeMachine = createCoffeeMachine()
    coffeeMachine.addBeans(beans)
    coffeeMachine.addWater(water)
    coffeeMachine.addMilk(milk)
    coffeeMachine.selectDrink(CAPPUCCINO_350)
    expect(() => { coffeeMachine.start() }).toThrow('Not enough beans and milk')
  })

   it('Thows error when there are not enough milk and beans', () => {
    const beans = createRawBeans(1)
    const water = createWater(2000)
    const milk = createMilk(1)

    const coffeeMachine = createCoffeeMachine()
    coffeeMachine.addBeans(beans)
    coffeeMachine.addWater(water)
    coffeeMachine.addMilk(milk)
    coffeeMachine.selectDrink(CAPPUCCINO_350)
    expect(() => { coffeeMachine.start() }).toThrow('Not enough beans and milk')
  })

  it('Throws error when there are not enough milk', () => {
    const beans = createRawBeans(1500)
    const water = createWater(2000)
    const milk = createMilk(1)

    const coffeeMachine = createCoffeeMachine()
    coffeeMachine.addBeans(beans)
    coffeeMachine.addWater(water)
    coffeeMachine.addMilk(milk)
    coffeeMachine.selectDrink(FLAT_WHITE)
    expect(() => { coffeeMachine.start() }).toThrow('Not enough milk')
  })

  it('Thows error when there are not enough beans', () => {
    const beans = createRawBeans(1)
    const water = createWater(2000)
    const milk = createMilk(1)

    const coffeeMachine = createCoffeeMachine()
    coffeeMachine.addBeans(beans)
    coffeeMachine.addWater(water)
    coffeeMachine.addMilk(milk)
    coffeeMachine.selectDrink(FLAT_WHITE)
    expect(() => { coffeeMachine.start() }).toThrow('Not enough beans and milk')
  })

   it('Thows error when there are not enough milk and beans', () => {
    const beans = createRawBeans(1)
    const water = createWater(2000)
    const milk = createMilk(1)

    const coffeeMachine = createCoffeeMachine()
    coffeeMachine.addBeans(beans)
    coffeeMachine.addWater(water)
    coffeeMachine.addMilk(milk)
    coffeeMachine.selectDrink(FLAT_WHITE)
    expect(() => { coffeeMachine.start() }).toThrow('Not enough beans and milk')
  })
})