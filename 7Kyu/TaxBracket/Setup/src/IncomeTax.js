class TaxCalculations {

   incomeTax(salary) {
    const tax = {brackets: {
                      PersonalAllowanceMax:12570,
                      BasicRateMax:50270,
                      HigherRateMax:150000,
                      AdditionalRate:150001} } 

      if (salary <= tax.brackets.PersonalAllowanceMax){
        return 0 
      }
   }


}