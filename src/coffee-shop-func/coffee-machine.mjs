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

    // delete
    get beans() {
      return this.findIngredientByType('RAW_BEANS')
    },
    get water() {
      return this.findIngredientByType('WATER')
    },
    get milk() {
      return this.findIngredientByType('MILK')
    },
    get creamMilk() {
      return this.findIngredientByType('CREAM_MILK')
    },
    // delete

    getIngredient: function(type) {
      return this.findIngredientByType(type)
    },
    findIngredientByType: function(type) {
      return this.ingredients.find(element => element.type === type)
    },

    recipes: recipes,
    ingredients: [],

    // delete
    addBeans: function(beans) {
      this.addIngredient(beans)
    },
    addWater: function(water) {
      this.addIngredient(water)
    },
    addMilk: function(milk) {
      this.addIngredient(milk)
    },
    addCreamMilk: function(creamMilk) {
      this.addIngredient(creamMilk)
    },
    // delete

    addIngredient: function(ingredient) {
      const coffeMachineIngredient = this.findIngredientByType(ingredient.type) 
      if (!coffeMachineIngredient) {
        this.ingredients.push(ingredient)
      } else {
        coffeMachineIngredient.value += ingredient.value
      }
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

      for (const ingredient of recipe.ingredients) {
        const coffeMachineIngredient = this.ingredients.find(element => element.type === ingredient.type)
        if (!coffeMachineIngredient || coffeMachineIngredient.value < ingredient.value) { throw Error(`Not enough ${ingredient.name}`) } 
        coffeMachineIngredient.value -= ingredient.value
      }

      return {
        type: recipe.name,
        volume: recipe.volume,
        temperature: recipe.temperature
      }
    }
  }
}