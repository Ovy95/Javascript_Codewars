class TaxCalculator {

  TaxBracket(salary){

    let brackets = {PersonalAllowance:  {Max:12570,Percentage:"0%"},
    BasicRate:          {Max:50270,Percentage:"20%"},
    HigherRate:         {Max:150000,Percentage:"40%"},
    AdditionalRate:     {Percentage:"45%"}} 

    if (salary <= brackets.PersonalAllowance.Max){
      return brackets.PersonalAllowance.Percentage
    }
    if ((salary <= brackets.BasicRate.Max) ){
      return brackets.BasicRate.Percentage
    }
    if (salary <= brackets.HigherRate.Max ){
      return brackets.HigherRate.Percentage
    }
    if (salary > brackets.HigherRate.Max){
      return brackets.AdditionalRate.Percentage
    }
  }
}


