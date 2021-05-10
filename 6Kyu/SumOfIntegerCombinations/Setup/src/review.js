class Combinations {

   combos(array, numberToMatch) {
      let matches = 0
     
      for (let index = 0; index < array.length; index++) {


        let addEach = Array(array.length).fill(array[index])

         for (let i = 0; i < addEach.length; i++) {
           let counter = 0
            counter += addEach[i]
            console.log(counter)
            if (counter === numberToMatch){
               matches++
               break
            }
            // [1,+1,+1] 3 =3 
         }


         if(array[index] === numberToMatch){
            matches++
         } 
   

      }
      // console.log(matches)
     return matches

   }
}