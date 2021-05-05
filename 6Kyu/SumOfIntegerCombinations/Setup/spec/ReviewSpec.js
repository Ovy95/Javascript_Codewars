describe("Combinations", function() {

  var find

  beforeEach (function () {
    find = new Combinations();
  });

  describe('combos', function() {

    it ("Given [1] find 1 passing test",function() {
      expect(find.combos([1],1)).toEqual(1);
    })
    it ("2 values in array find 1 ",function() {
      expect(find.combos([1,2],1)).toEqual(1);
    })

  })

});
