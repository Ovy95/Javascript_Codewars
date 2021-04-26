class InArray {

   filterArrays(array1,array2 ){
      let matches = []
     let  checkStrings = array2.toString()

      for (let index = 0; index < array1.length; index++) {
         let check = array1[index].toString()
         let matched = checkStrings.match(check)

         if (matched === null){
            break
         }
         if(matched.length > 0){
            matches.push(array1[index])
         }
      }
      return matches
   }
}