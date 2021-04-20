describe("ArrayDifference", function() {

  var array

  beforeEach (function () {
    array = new ArrayDifference();
  });

  describe('arrayDiff', function() {
      it ("Given [], [4,5] the difference returned would be IT returns []",function() {
        expect(array.arrayDiff([],[4,5])).toEqual([]);
      })

      it ("Given [3,4], [3] the difference returned would be IT returns [4]",function() {
        expect(array.arrayDiff([3,4],[3])).toEqual([4]);
      })
     
     

  })

 


});
