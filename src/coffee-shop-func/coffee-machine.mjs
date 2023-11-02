import { espresso, doubleEspresso, smallLatte } from './recipes.mjs'

export function createCoffeeMachine() {
  return {
    get drinks() {
      return this.recipes.map(recipe => recipe.name)
    },
    recipes: [
      espresso,
      doubleEspresso,
      smallLatte
    ],
    addBeans: function(beans) {
      this.beans = beans
    },
    addWater: function(water) {
      this.water = water
    },
    addMilk: function(milk) {
      this.milk = milk
    },
    selectDrink: function(drink) {
      this.drink = drink
    },
    start: function() {
      const recipe = this.recipes.find(recipe => recipe.name === this.drink)

      if (!recipe) { return }

      if (recipe.beans) {
        this.beans.weight -= recipe.beans
      }
      if (recipe.water) {
        this.water.volume -= recipe.water
      }
      if (recipe.milk) {
        this.milk.volume -= recipe.milk
      }

      return {
        type: recipe.name,
        volume: recipe.volume,
        temperature: recipe.temperature
      }
    }
  }
}