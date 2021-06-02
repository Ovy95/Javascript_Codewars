describe("NationInsuranceTax", function() {
  var taxCalculations;

  beforeEach (function () {
    taxCalculations = new NationInsuranceTax();
  });

  describe('Natational Insurance FUNCTION tests for threshold checks', function() {
    it ("threshold check returns 0",function() {
      expect(taxCalculations.totalIncomeTax(0)).toEqual(0);
    })
    it ("threshold check returns 0",function() {
      expect(taxCalculations.totalIncomeTax(9568)).toEqual(0);
    })
  })
})

