describe("ClassName", function() {
  var oddInts;

  beforeEach (function () {
    oddInts = new OddInts();
  });

  describe('FilterArray Function', function() {
      it ("Given 1 returns 1 ",function() {
        expect(oddInts.filterArray([1])).toEqual(1);
      })
      it ("Given 2,2,5 this returns 5",function() {
        expect(oddInts.filterArray([2,2,5])).toEqual(5);
      })

      it ("Given 1,1,2,5,4,4,2 this returns 5",function() {
        expect(oddInts.filterArray([1,1,2,5,4,4,2] )).toEqual(5);
      })
      
  })
  

  

});

