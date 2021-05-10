class JackBook {

   likes(names) {
    let  whoLikesthis = ""

    if(names.length == 0){
      whoLikesthis = 'no one likes this'
    } else if (names.length == 1) {
      whoLikesthis = names[0] +  ' likes this'
    } else if (names.length == 2) {
      whoLikesthis = names[0] + ' and '+ names[1] +' like this'
    }
   
     return whoLikesthis
  }
}
