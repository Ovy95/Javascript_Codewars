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
      if (keys1[index] != undefined){
        Ingredients = new Object();
        Ingredients.Ingredient = keys2[index]
        Ingredients.amount = values2[index]
        IngredientsArray.push(Ingredients)
      }
    }

    for (let index = 0; index < IngredientsArray.length; index++) {
      // IngredientsArray[index]
      let kay = IngredientsArray[index].Ingredient 
      console.log(kay)
      console.log(recipe[kay])
      console.log(IngredientsArray[index].amount)

      if (IngredientsArray[index].amount == recipe[kay]){
        return 1
      }

    }

  }

}