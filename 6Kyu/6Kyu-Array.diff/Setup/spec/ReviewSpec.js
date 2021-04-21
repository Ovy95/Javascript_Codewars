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

      it ("Given [3,4], [3] the difference returned would be IT returns [1,8,2]",function() {
        expect(array.arrayDiff([1,8,2],[])).toEqual([1,8,2]);
      })

      it ("Given [1,2,3],[1,2] the difference returned would be IT returns [3]",function() {
        expect(array.arrayDiff([1,2,3],[1,2])).toEqual([3]);
      })

      it ("Given [1,2,2],[2] the difference returned would be IT returns [3]",function() {
        expect(array.arrayDiff([1,2,2],[2])).toEqual([1]);
      })
      it ("given 1,2,2 and 1 returns values 2,2",function() {
        expect(array.arrayDiff([1,2,2],[1])).toEqual([2,2]);
      })

      it ("Checks for negative values",function() {
        expect(array.arrayDiff([-1,-2,-3],[-2])).toEqual([-1,-3]);
      })

      it ("Checks a mix of negative and positive values",function() {
        expect(array.arrayDiff([-1,-2,15,-2,-3],[-2,15,-2])).toEqual([-1,-3]);
      })
     
      it ("Given really long array returns 16,13",function() {
        expect(array.arrayDiff([-19,-4,-5, -8, 16, 2, -15, -9,15,15,13],[-5,-9,15,15,-4,-15,-19,2,-8])).toEqual([16, 13]);
      })

      it ("Checks for negative values",function() {
        expect(array.arrayDiff([-1,-2,-3],[-2])).toEqual([-1,-3]);
      })

      it ("Checks a mix of negative and positive values",function() {
        expect(array.arrayDiff([-1,-2,15,-2,-3],[-2,15,-2])).toEqual([-1,-3]);
      })
     

  })

 


});
