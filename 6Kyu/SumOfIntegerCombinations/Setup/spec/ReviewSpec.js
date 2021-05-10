describe("Combinations", function() {

  var find

  beforeEach (function () {
    find = new Combinations();
  });

  describe('combos', function() {

    
    it ("2 values in array find 1 ",function() {
      expect(find.combos([1,2],1)).toEqual(1);
    })

    it ("3 values in array find 1 ",function() {
      expect(find.combos([1,2,3],2)).toEqual(2);
    })

    it ("3 values in array find 3 ",function() {
      expect(find.combos([1,2,3],3)).toEqual(3);
    })
    

  })

});
