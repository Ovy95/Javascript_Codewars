class ArrayDifference {

   arrayDiff(a,b) {

    for (let aIndex = 0; aIndex < a.length; aIndex++) {
        
      for (let bIndex = 0; bIndex < b.length; bIndex++) {
          if (a[aIndex] === b[bIndex]){
            a.splice(aIndex, 1); 
          }
        }

    }

    return a
   
   }
}