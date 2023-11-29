import { ESPRESSO, DOUBLE_ESPRESSO, LATTE_200, LATTE_250, LATTE_350, CAPPUCCINO_200, CAPPUCCINO_250, CAPPUCCINO_350, FLAT_WHITE, CLASSIC_RAF_200, CLASSIC_RAF_250, CLASSIC_RAF_350 } from './coffee-types.mjs'

export const espresso = {
  name: ESPRESSO,
  beans: 8.75,
  water: 20,
  volume: 20,
  temperature: 92.3
}

export const doubleEspresso = {
  name: DOUBLE_ESPRESSO,
  beans: 17.5,
  water: 40,
  volume: 40,
  temperature: 92.3
}

export const latte_200 = {
  name: LATTE_200,
  beans: 8.75,
  water: 20,
  milk: 180,
  volume: 200,
  temperature: 65.5 
}

export const latte_250 = {
  name: LATTE_250,
  beans: 8.75,
  water: 20,
  milk: 230,
  volume: 250,
  temperature: 65.5
}

export const latte_350 = {
  name: LATTE_350,
  beans: 17.5,
  water: 40,
  milk: 310,
  volume: 350,
  temperature: 65.5
}

export const cappuccino_200 = {
  name: CAPPUCCINO_200,
  beans: 8.75,
  water: 20,
  milk: 180,
  volume: 200,
  temperature: 65.5 
}

export const cappuccino_250 = {
  name: CAPPUCCINO_250,
  beans: 17.5,
  water: 40,
  milk: 210,
  volume: 250,
  temperature: 65.5
}

export const cappuccino_350 = {
  name: CAPPUCCINO_350,
  beans: 17.5,
  water: 40,
  milk: 310,
  volume: 350,
  temperature: 65.5
}

export const flat_white = {
  name: FLAT_WHITE,
  beans: 17.5,
  water: 40,
  milk: 160,
  volume: 200,
  temperature: 65.5
}

export const classic_raf_200 = {
  name: CLASSIC_RAF_200,
  beans: 8.75, 
  water: 20,
  creamMilk: 180,
  volume: 200,
  temperature: 65.5
}

export const classic_raf_250 = {
  name: CLASSIC_RAF_250, 
  beans: 8.75,
  water: 20,
  creamMilk: 230,
  volume: 250,
  temperature: 65.5
}

export const classic_raf_350 = {
  name: CLASSIC_RAF_350, 
  beans: 17.5,
  water: 40, 
  creamMilk: 310,
  volume: 350,
  temperature: 65.5
}