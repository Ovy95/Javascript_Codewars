class createPhoneNumber {

   phoneNumber(numbersArray) {
      let returnPhoneNumber = "("

      for (let index = 0; index < numbersArray.length; index++) {
         if (index ===3){
            returnPhoneNumber += ") "
         }if (index ===6){
            returnPhoneNumber += "-"
         }
         returnPhoneNumber +=  numbersArray[index];
      }

      return returnPhoneNumber

   }
}