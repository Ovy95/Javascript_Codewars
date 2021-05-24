class Bakery {

  cakeMaker(recipe, availableIngredients) {
    const keys1 = Object.keys(recipe);
    const keys2 = Object.keys(availableIngredients);

   let correctIngredients = (keys1.every(elem => keys2.includes(elem)))
    if (correctIngredients == false){
      return 0 
    }

  return 1
  }

}