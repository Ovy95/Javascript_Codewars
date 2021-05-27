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
   })
});

