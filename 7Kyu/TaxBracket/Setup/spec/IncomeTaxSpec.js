describe("TaxCalculations", function() {
  var taxCalculations;

  beforeEach (function () {
    taxCalculations = new TaxCalculations();
  });


  
  describe('IncomeTax works out the total amount of Income tax to be payed on salary ', function() {

    it ("Personal Allowance returns 0",function() {
      expect(taxCalculations.incomeTax(0)).toEqual(0);
    })
    it ("Personal Allowance returns 0",function() {
      expect(taxCalculations.incomeTax(1570)).toEqual(0);
    })
    it ("Personal Allowance returns 0",function() {
      expect(taxCalculations.incomeTax(12570)).toEqual(0);
    })


    it ("BasicRateMax returns 1",function() {
      expect(taxCalculations.BasicRate(12571)).toEqual(0.2);
    })
    it ("BasicRateMax returns 3486.00",function() {
      expect(taxCalculations.BasicRate(30000)).toEqual(3486.00);
    })
    it ("BasicRateMax returns 7540.00",function() {
      expect(taxCalculations.BasicRate(50270)).toEqual(7540.00);
    })
   })
});

