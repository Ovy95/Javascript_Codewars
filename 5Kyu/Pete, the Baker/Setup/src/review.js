class Bakery {

  cakeMaker(recipe, availableIngredients) {
    const keys1 = Object.keys(recipe);
    const values1 = Object.values(recipe);

    const keys2 = Object.keys(availableIngredients);
    const values2 = Object.values(availableIngredients);

    
   let correctIngredients = (keys1.every(elem => keys2.includes(elem)))
    if (correctIngredients == false){
      return 0 
    }
    let Ingredients = {Ingredient : String, amount : Number }


    let IngredientsArray = []
    for (let index = 0; index < keys2.length; index++) {
      for (let j = 0; j < keys1.length; j++) {

        if (keys1[j] == keys2[index]){
          Ingredients = new Object();
          Ingredients.Ingredient = keys2[index]
          Ingredients.amount = values2[index]
          IngredientsArray.push(Ingredients)
        }
      }
    }

   let  recipeAmount = []
    for (let index = 0; index < IngredientsArray.length; index++) {
      // IngredientsArray[index]
      let key = IngredientsArray[index].Ingredient 

      let amount = IngredientsArray[index].amount / recipe[key]
      recipeAmount.push(Math.floor(amount))
    }

    return Math.min(...recipeAmount)
  }


}