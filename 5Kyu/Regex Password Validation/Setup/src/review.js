class Password {

   validation(password) {

    return /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])[A-Za-z0-9]{6,}$/g.test(password);
 
   }


}
