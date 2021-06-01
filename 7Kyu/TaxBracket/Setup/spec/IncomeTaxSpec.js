describe("TaxCalculations", function() {
  var taxCalculations;

  beforeEach (function () {
    taxCalculations = new TaxCalculations();
  });

  describe('IncomeTax FUNCTION tests for personal allowance', function() {
    it ("Personal Allowance returns 0",function() {
      expect(taxCalculations.incomeTax(0)).toEqual(0);
    })
    it ("Personal Allowance returns 0",function() {
      expect(taxCalculations.incomeTax(1570)).toEqual(0);
    })
    it ("Personal Allowance returns 0",function() {
      expect(taxCalculations.incomeTax(12570)).toEqual(0);
    })
  })
  describe('BasicRateMax Function works the  works out the total amount of Income tax to be payed on salary at BASic Rate (20%) ', function() {
    it ("BasicRateMax returns 0.2 as the it's 1 pound over the tax allowance",function() {
      expect(taxCalculations.BasicRate(12571)).toEqual(0.2);
    })
    it ("BasicRateMax returns 3486.00",function() {
      expect(taxCalculations.BasicRate(30000)).toEqual(3486.00);
    })
    it ("BasicRateMax returns 7540.00",function() {
      expect(taxCalculations.BasicRate(50270)).toEqual(7540.00);
    })
  })

  describe('HigherRate Function tests checkes working out the total amount of Income tax to be payed on salary ', function() {
  it ("Total Income tax to pay would return 3486.00",function() {
    expect(taxCalculations.HigherRate(70000)).toEqual(15432.00);
  })
  it ("Total Income tax to pay would return  return 7540.40",function() {
    expect(taxCalculations.HigherRate(50271)).toEqual(7540.40);
  })
  
  });

})

