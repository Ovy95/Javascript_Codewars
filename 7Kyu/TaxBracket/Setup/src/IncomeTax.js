class TaxCalculations {
    tax = {brackets: {
      PersonalAllowanceMax:12570,
      BasicRateMax:50270,
      HigherRateMax:150000} }

   incomeTax(salary) {
      if (salary <= this.tax.brackets.PersonalAllowanceMax){
        return 0
      }
      if (salary <= this.tax.brackets.BasicRateMax){
         let taxableincome = this.twentyPercent(salary)
         return taxableincome
      }
      if (salary <= this.tax.brackets.HigherRateMax){
         let taxableincome = this.HigherRate(salary)
         return taxableincome
      }

   }

   BasicRate(salary){
      let taxableincome = (salary - this.tax.brackets.PersonalAllowanceMax)
      taxableincome = (taxableincome * .20);
      return taxableincome
   }

   HigherRate(salary) {
      console.log(salary)
      let personalAllowance
      if (salary > 100000){
         personalAllowance = this.aboveHundredK(salary)
      }else{
         personalAllowance = this.tax.brackets.PersonalAllowanceMax
      }
      salary = (salary - personalAllowance)
      let secondBanding = (this.tax.brackets.BasicRateMax - this.tax.brackets.PersonalAllowanceMax)
      let basicRateTax = (secondBanding * .20)
      secondBanding = salary - secondBanding
      let HigherRateTax = (secondBanding * .40);
      let totalIncomeTax = HigherRateTax + basicRateTax
      return totalIncomeTax
   }
   aboveHundredK(salary){
      let paCap = 125140
      if (salary >= paCap){
         return 0
      }
      salary = salary - 100000
      let allowance = salary / 2
      let newAllowance =  this.tax.brackets.PersonalAllowanceMax - allowance
      return newAllowance
   }


   AdditionalRate(salary){
      //45%
   }

   // Next steps for this are to create another Method which is Max Rate so Create the Higherrate, Also going to be running 
   // into the edge case of not having a personal allowance on values 
   // This is something that needs to be checked out 
   // this will then be complete just need to do the same for national Insurance 
   


}