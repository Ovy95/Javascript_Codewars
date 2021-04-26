class InArray {

   filterArrays(array1,array2 ){
     let matches = []
     let  checkStrings = array2.toString()

      for (let index = 0; index < array1.length; index++) {
         let check = array1[index]
         let matched = ""
          matched += checkStrings.match(check)

         if (matched === check){ 
            matches.push(check)
         } 
      }

      return matches.sort()
   }
}