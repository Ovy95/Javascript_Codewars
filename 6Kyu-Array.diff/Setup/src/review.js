class ArrayDifference {

   arrayDiff(a,b) {
    
    // a  [3,4]
    // b   [3]

    for (let aIndex = 0; aIndex < a.length; aIndex++) {
        // a[aIndex]; [3,4]
        for (let bIndex = 0; bIndex < b.length; bIndex++) {
          // a[3]
          if (a[aIndex] === b[bIndex]){
            a.splice(aIndex, 1); 
          }

        }
    }

    return a
   
   }
}