class ArrayDifference {

   arrayDiff(aArray,bArray) {

    for (let aIndex = 0; aIndex < aArray.length; aIndex++) {
        
      for (let bIndex = 0; bIndex < bArray.length; bIndex++) {
        console.log(aArray[aIndex],bArray[bIndex])
          if (aArray[aIndex] === bArray[bIndex]){
            aArray.splice(aIndex, 1) 
            --aIndex
          }
        }
    }

    return aArray
   
   }
}
