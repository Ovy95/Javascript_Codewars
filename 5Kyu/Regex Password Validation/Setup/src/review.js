class Password {

   validation(password) {


    return /(?=.*[a-z])(?=.*[0-9])(?=.{6,})/g.test(password);
 
   }


}
