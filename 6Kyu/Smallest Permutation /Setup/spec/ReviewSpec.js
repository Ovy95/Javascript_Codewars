describe("Permutation", function() {

  var permutation

  beforeEach (function () {
    permutation = new Permutation();
  });

  describe('permutation', function() {

    
    it ("Given 0 // Returns 0 ",function() {
      expect(permutation.minPermutation(0)).toEqual(0);
    })
    it ("Given 10 // Returns 10 ",function() {
      expect(permutation.minPermutation(10)).toEqual(10);
    })
    it ("Given 110 // Returns 101 ",function() {
      expect(permutation.minPermutation(110)).toEqual(101);
    })
    it ("Given -20 // Returns -20 ",function() {
      expect(permutation.minPermutation(-20)).toEqual(-20);
    })
    it ("Given 1021 // Returns 1021 ",function() {
      expect(permutation.minPermutation(1021)).toEqual(1012);
    })


  })

});
