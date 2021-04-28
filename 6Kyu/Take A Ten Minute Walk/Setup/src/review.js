class TenMinuteWalk {

   routePlanner(route) {

      if(route.length != 10){
         return false
      }
      
      let direction = {'w': 0, 'e':0, 'n': 0, 's':0}

      for (let index = 0; index < route.length; index++) {
         if (route[index] === 'w' ){
            direction.w++
         }
         if (route[index] === 'e' ){
            direction.e++
         }
         if (route[index] === 'n' ){
            direction.n++
         }
         if (route[index] === 's' ){
            direction.s++
         }
      }
      
      if (direction.n === direction.s && direction.e === direction.w ){
         return true
      }
      return false

   }
}