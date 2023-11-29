import { espresso, doubleEspresso, latte_200, latte_250, latte_350, cappuccino_200, cappuccino_250, cappuccino_350, flat_white, classic_raf_200, classic_raf_250, classic_raf_350 } from './recipes.mjs'

export function createCoffeeMachine(
  recipes = [
    espresso,
    doubleEspresso,
    latte_200,
    latte_250,
    latte_350,
    cappuccino_200,
    cappuccino_250,
    cappuccino_350,
    flat_white,
    classic_raf_200,
    classic_raf_250,
    classic_raf_350,
  ]
) {
  return {
    get drinks() {
      return this.recipes.map(recipe => recipe.name)
    },
    recipes: recipes,
    addBeans: function(beans) {
      this.beans = beans
    },
    addWater: function(water) {
      this.water = water
    },
    addMilk: function(milk) {
      this.milk = milk
    },
    addCreamMilk: function(creamMilk) {
      this.creamMilk = creamMilk
    },
    selectDrink: function(drink) {
      if (!this.drinks.includes(drink)) {
        throw Error('Unknown drink')
      }
      this.drink = drink
    },
    start: function() {
      const recipe = this.recipes.find(recipe => recipe.name === this.drink)

      if (!recipe) {
        throw Error('Recipe not found')
       }

      if (recipe.beans) {
        if (this.beans.weight < recipe.beans && this.milk.volume < recipe.milk) {
          throw Error('Not enough beans and milk')
        }

        if (this.beans.weight < recipe.beans && this.water.volume < recipe.water) {
          throw Error('Not enough beans and water')
        }

        if (this.beans.weight < recipe.beans) { 
          throw Error('Not enough beans')
        }

        this.beans.weight -= recipe.beans
      }

      if (recipe.water) {
        if (this.water.volume < recipe.water) {
          throw Error('Not enough water')
        }

        this.water.volume -= recipe.water
      }

      if (recipe.milk) {
        if (this.milk.volume < recipe.milk) {
          throw Error('Not enough milk')
        }

        this.milk.volume -= recipe.milk
      }

      if (recipe.creamMilk) {
        if (this.creamMilk.volume < recipe.creamMilk) {
          throw Error('Not enough cream milk')
        }

        this.creamMilk.volume -= recipe.creamMilk
      }

      return {
        type: recipe.name,
        volume: recipe.volume,
        temperature: recipe.temperature
      }
    }
  }
}