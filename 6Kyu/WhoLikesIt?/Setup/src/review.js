class JackBook {

   likes(names) {
    let  whoLikesthis = ""
    let likeCounter = names.length

    if(likeCounter == 0){
      whoLikesthis = 'no one likes this'
    } else if (likeCounter == 1) {
      whoLikesthis = names[0] +  ' likes this'
    } else if (likeCounter == 2) {
      whoLikesthis = names[0] + ' and '+ names[1] +' like this'
    } else if (likeCounter == 3 ){
      whoLikesthis = names[0] + ", " + names[1]+ " and " + names[2] + ' like this'
    } else {
      whoLikesthis = names[0] + ", " + names[1]+ " and " + (likeCounter - 2) + ' others like this'
    }
     return whoLikesthis
  }
}
