export function createRawBeans(weight) {
  return {
    type: 'RAW_BEANS',
    weight: weight
  }
}

export function createWater(volume) {
  return {
    type: 'WATER',
    volume: volume 
  }
}

export function createMilk(volume) {
  return {
    type: 'MILK',
    volume: volume 
  }
}

export function createCreamMilk(volume) {
  return {
    type: 'CREAM_MILK', 
    volume: volume
  }
}