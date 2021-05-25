describe("TaxCalculator", function() {
  var taxCalculator;

  beforeEach (function () {
    taxCalculator = new TaxCalculator();
  });

  describe('TaxBracket Function for returning how much Percentage to be paid', function() {
      it ("Personal Allowance",function() {
        expect(taxCalculator.TaxBracket(0)).toEqual("0%");
      })
      it ("Personal Allowance",function() {
        expect(taxCalculator.TaxBracket(12,570)).toEqual("0%");
      })
      it ("Basic rate",function() {
        expect(taxCalculator.TaxBracket(12,571 )).toEqual("20%");
      })
      it ("Basic rate",function() {
        expect(taxCalculator.TaxBracket(50,270)).toEqual("20%");
      })
      it ("Higher rate",function() {
        expect(taxCalculator.TaxBracket(50,271)).toEqual("40%");
      })
      it ("Higher rate",function() {
        expect(taxCalculator.TaxBracket(150,000)).toEqual("40%");
      })
      it ("Additional rate	over 150k",function() {
        expect(taxCalculator.TaxBracket(150,001)).toEqual("45%");
      })
      
  })
  

});

