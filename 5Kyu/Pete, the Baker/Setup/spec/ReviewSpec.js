describe("Bakery", function() {
  var bakery;

  beforeEach (function () {
    bakery = new Bakery();
  });

  describe('Bakery', function() {

      it ("Early return called if Ingredients are not the same ",function() {
        expect(bakery.cakeMaker({flour: 500},{milk: 500})).toEqual(0);
      })
      
      it ("Returns harded 1 are objects are the same",function() {
        expect(bakery.cakeMaker({milk: 500},{ milk: 500 })).toEqual(1);
      })

      it ("Checks extra items that are not needed",function() {
        expect(bakery.cakeMaker({milk: 500},{orangepell: 25, milk: 500 })).toEqual(1);
      })

      it ("Should return one as values match",function() {
        expect(bakery.cakeMaker({milk: 500,chocolateDust:500},{milk: 500, chocolateDust: 500 })).toEqual(1);
      })

      it ("Should return one as values match",function() {
        expect(bakery.cakeMaker({milk: 100,chocolateDust:500},{milk: 500, chocolateDust: 500 })).toEqual(1);
      })

      it ("Should returns 2 as values match",function() {
        expect(bakery.cakeMaker({milk: 100,chocolateDust:250},{milk: 500, chocolateDust: 500 })).toEqual(2);
      })

      it ("Returns 0 as we dont have enough Ingredients to make recipe  ",function() {
        expect(bakery.cakeMaker({milk: 1000,chocolateDust:250},{milk: 500, chocolateDust: 500 })).toEqual(0);
      })


  })
  

  

});

