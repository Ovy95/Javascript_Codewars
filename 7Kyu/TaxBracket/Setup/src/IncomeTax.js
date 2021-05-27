class TaxCalculations {
    tax = {brackets: {
      PersonalAllowanceMax:12570,
      BasicRateMax:50270,
      HigherRateMax:150000,
      AdditionalRate:150001} }

   incomeTax(salary) {
   //  const tax = {brackets: {
   //                    PersonalAllowanceMax:12570,
   //                    BasicRateMax:50270,
   //                    HigherRateMax:150000,
   //                    AdditionalRate:150001} } 

      if (salary <= this.tax.brackets.PersonalAllowanceMax){
        return 0 
      }
      if (salary <= this.tax.brackets.BasicRateMax){
         taxableincome = this.twentyPercent(salary)
         return taxableincome
       }


   }

   BasicRate(salary){
      let taxableincome = (salary - this.tax.brackets.PersonalAllowanceMax)
      taxableincome = (taxableincome * .20);
      return taxableincome
   }


}