class JackBook {

   likes(names) {
    let  whoLikesthis = " likes this"

    if(names.length == 0){
      whoLikesthis = 'no one'+ whoLikesthis
    }else{
      whoLikesthis = names[0] + whoLikesthis
    }
   
     return whoLikesthis
  }
}
