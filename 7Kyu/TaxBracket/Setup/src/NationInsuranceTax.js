class NationInsuranceTax {
  NationInsuranceTax = {
    Class1Rates: { threshold:9568,
                   BasicRateMax:50270 }}

      totalIncomeTax(salary){
        let taxToPay = 0
        if (salary <= this.NationInsuranceTax.Class1Rates.threshold){
          return taxToPay
        }


      }
  



}






