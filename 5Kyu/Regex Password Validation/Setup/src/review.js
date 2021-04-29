class Password {

   validation(password) {


    return /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})/g.test(password);
 
   }


}
