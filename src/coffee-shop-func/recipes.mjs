import { ESPRESSO, DOUBLE_ESPRESSO, LATTE_200, LATTE_250, LATTE_350, CAPPUCCINO_200, CAPPUCCINO_250, CAPPUCCINO_350, FLAT_WHITE, CLASSIC_RAF_200, CLASSIC_RAF_250, CLASSIC_RAF_350 } from './coffee-types.mjs'
import { createRawBeans, createMilk, createWater, createCreamMilk } from './ingredients'

export const espresso = {
  name: ESPRESSO,
  ingredients: [
    createRawBeans(8.75),
    createWater(20)
  ],
  volume: 20,
  temperature: 92.3
}

export const doubleEspresso = {
  name: DOUBLE_ESPRESSO,
  ingredients: [
    createRawBeans(17.5),
    createWater(40)
  ],
  volume: 40,
  temperature: 92.3
}

export const latte_200 = {
  name: LATTE_200,
  ingredients: [
    createRawBeans(8.75),
    createWater(20),
    createMilk(180)
  ],
  volume: 200,
  temperature: 65.5 
}

export const latte_250 = {
  name: LATTE_250,
  ingredients: [
    createRawBeans(8.75),
    createWater(20),
    createMilk(230)
  ],
  volume: 250,
  temperature: 65.5
}

export const latte_350 = {
  name: LATTE_350,
  ingredients: [
    createRawBeans(17.5),
    createWater(40),
    createMilk(310)
  ],
  volume: 350,
  temperature: 65.5
}

export const cappuccino_200 = {
  name: CAPPUCCINO_200,
  ingredients: [
    createRawBeans(8.75),
    createWater(20),
    createMilk(180)
  ],
  volume: 200,
  temperature: 65.5 
}

export const cappuccino_250 = {
  name: CAPPUCCINO_250,
  ingredients: [
    createRawBeans(17.5),
    createWater(40),
    createMilk(210)
  ],
  volume: 250,
  temperature: 65.5
}

export const cappuccino_350 = {
  name: CAPPUCCINO_350,
  ingredients: [
    createRawBeans(17.5),
    createWater(40),
    createMilk(310)
  ],
  volume: 350,
  temperature: 65.5
}

export const flat_white = {
  name: FLAT_WHITE,
  ingredients: [
    createRawBeans(17.5),
    createWater(40),
    createMilk(160)
  ],
  volume: 200,
  temperature: 65.5
}

export const classic_raf_200 = {
  name: CLASSIC_RAF_200,
  ingredients: [
    createRawBeans(8.75),
    createWater(20),
    createCreamMilk(180)
  ],
  volume: 200,
  temperature: 65.5
}

export const classic_raf_250 = {
  name: CLASSIC_RAF_250, 
  ingredients: [
    createRawBeans(8.75),
    createWater(20),
    createCreamMilk(230)
  ],
  volume: 250,
  temperature: 65.5
}

export const classic_raf_350 = {
  name: CLASSIC_RAF_350, 
  ingredients: [
    createRawBeans(17.5),
    createWater(40),
    createCreamMilk(310)
  ],
  volume: 350,
  temperature: 65.5
}