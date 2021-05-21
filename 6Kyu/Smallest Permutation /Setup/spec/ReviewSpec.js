describe("Permutation", function() {

  var permutation

  beforeEach (function () {
    permutation = new Permutation();
  });

  describe('permutation', function() {

    
    it ("Given 0 // Returns 0 ",function() {
      expect(permutation.minPermutation(0)).toEqual(0);
    })
    it ("Given 0 // Returns 0 ",function() {
      expect(permutation.minPermutation(10)).toEqual(10);
    })
    it ("Given 0 // Returns 0 ",function() {
      expect(permutation.minPermutation(-20)).toEqual(-20);
    })


  })

});
