describe("ClassName", function() {
  var oddInts;

  beforeEach (function () {
    oddInts = new OddInts();
  });

  describe('FilterArray Function 1 value', function() {
      it ("hardCoded test passing",function() {
        expect(oddInts.filterArray([1])).toEqual(1);
      })
      
  })
  

  

});

