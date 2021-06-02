class NationInsuranceTax {
  NationInsuranceTax = {
    Class1Rates: { threshold:9568,
                   BasicRateMax:50270 }}

      totalIncomeTax(salary){
        let taxToPay = 0
        if (salary <= this.NationInsuranceTax.Class1Rates.threshold){
          return taxToPay
        }
        if (salary <= this.NationInsuranceTax.Class1Rates.BasicRateMax){
          taxToPay = this.BasicRatemin(salary)
          return taxToPay
        }

        if (salary > this.NationInsuranceTax.Class1Rates.BasicRateMax){
          taxToPay = this.AboveBasicRate(salary)
          return taxToPay
        }
      }

      BasicRatemin(salary){
        let taxableincome = (salary - this.NationInsuranceTax.Class1Rates.threshold)
        taxableincome = (taxableincome * .12);

        return taxableincome
      }

      AboveBasicRate(salary){
        let firstIncomeTax = this.BasicRatemin(this.NationInsuranceTax.Class1Rates.BasicRateMax)
        let taxableincome = (salary - this.NationInsuranceTax.Class1Rates.BasicRateMax)
        taxableincome = (taxableincome * .02) + firstIncomeTax;

        return taxableincome
      }

}






