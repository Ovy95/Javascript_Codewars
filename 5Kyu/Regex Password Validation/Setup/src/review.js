class Password {

   validation(password) {


    return /([0-9]{5})\w+/g.test(password);
 
   }


}
