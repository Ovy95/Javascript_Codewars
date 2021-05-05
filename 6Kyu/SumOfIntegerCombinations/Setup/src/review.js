class Combinations {

   combos(array, numberToMatch) {
      let matches = 0
      for (let index = 0; index < array.length; index++) {
         // index is 0 
         let lengthTimes = array[index] * array.length
         
         if(lengthTimes === numberToMatch || numberToMatch === array[index]){
            matches++
         } 

      }
      console.log(matches)
     return matches

   }
}