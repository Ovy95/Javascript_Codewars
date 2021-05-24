describe("Bakery", function() {
  var bakery;

  beforeEach (function () {
    bakery = new Bakery();
  });

  describe('Bakery', function() {
      it ("Early return called if Ingredients are not the same ",function() {
        expect(bakery.cakeMaker({flour: 500},{milk: 500})).toEqual(0);
      })
      
      
  })
  

  

});

