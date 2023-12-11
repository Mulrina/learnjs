export function createRawBeans(weight) {
  return {
    type: 'RAW_BEANS',
    name: 'beans',
    unit: 'kg',
    value: weight
  }
}

export function createWater(volume) {
  return {
    type: 'WATER',
    name: 'water',
    unit: 'ml',
    value: volume 
  }
}

export function createMilk(volume) {
  return {
    type: 'MILK',
    name: 'milk',
    unit: 'ml',
    value: volume 
  }
}

export function createCreamMilk(volume) {
  return {
    type: 'CREAM_MILK', 
    name: 'cream milk',
    unit: 'ml',
    value: volume
  }
}