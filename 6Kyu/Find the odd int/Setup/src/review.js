class OddInts {

  filterArray(array){

    var result = 0;
    for(var i = 0 ; i<array.length;i++){
    var count = 0 ;

    for(var j = 0 ; j<array.length;j++){
       if(array[i]==array[j])
       count++;
     }
     if(count%2==1)
     {
       result = array[i];
       break;
     }
  }
  return result;
      

  }

}