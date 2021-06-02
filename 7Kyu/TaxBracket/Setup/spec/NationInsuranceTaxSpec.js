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

    it ("Given £1 over threshold returns 0.12",function() {
      expect(taxCalculations.totalIncomeTax(9569)).toEqual(0.12);
    })


  })

  describe('Natational Insurance FUNCTION tests for tBasicRatemin returns the highest and lowest values', function() {
    it ("Given £1 over threshold returns 0.12",function() {
      expect(taxCalculations.BasicRatemin(9569)).toEqual(0.12);
    })
    it ("basicRate check on max value returns correct amount 0",function() {
      expect(taxCalculations.BasicRatemin(50270)).toEqual(4884.24);
    })
  })


})
