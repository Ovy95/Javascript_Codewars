describe("NationInsuranceTax", function() {
  var taxCalculations;

  beforeEach (function () {
    taxCalculations = new NationInsuranceTax();
  });

  describe('Natational Insurance FUNCTION totalIncomeTax tests for all three cases', function() {
    it ("threshold check returns 0",function() {
      expect(taxCalculations.totalIncomeTax(0)).toEqual(0);
    })
    it ("threshold check returns 0",function() {
      expect(taxCalculations.totalIncomeTax(9568)).toEqual(0);
    })

    it ("Given 50k over (In basic range) returns 4851.84",function() {
      expect(taxCalculations.totalIncomeTax(50000)).toEqual(4851.84);
    })
    it ("Given 200k over (Outside basic range) returns 7878.84",function() {
      expect(taxCalculations.totalIncomeTax(200000)).toEqual(7878.84);
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

  describe('Natational Insurance FUNCTION AboveBasicRate testing 60k and 100k', function() {
    it ("Given 60,000 returns 5078.84",function() {
      expect(taxCalculations.AboveBasicRate(60000)).toEqual(5078.84);
    })
    it ("Given 100,000 returns 5878.84",function() {
      expect(taxCalculations.AboveBasicRate(100000)).toEqual(5878.84);
    })
    
  })


})

