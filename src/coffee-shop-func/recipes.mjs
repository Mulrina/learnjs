import { ESPRESSO, DOUBLE_ESPRESSO, SMALL_LATTE, CAPPUCCINO } from './coffee-types.mjs'

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

export const smallLatte = {
  name: SMALL_LATTE,
  beans: 8.75,
  water: 20,
  milk: 180,
  volume: 200,
  temperature: 65.5
}

export const cappuccino = {
  name: CAPPUCCINO,
  beans: 17.5,
  water: 40,
  milk: 210,
  volume: 250,
  temperature: 65.5
}