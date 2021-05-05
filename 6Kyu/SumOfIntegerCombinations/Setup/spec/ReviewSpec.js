describe("Combinations", function() {

  var find

  beforeEach (function () {
    find = new Combinations();
  });

  describe('combos', function() {

    it ("HardedFirst test checking setup, basic test",function() {
      expect(find.combos([1],1)).toEqual(1);
    })

  })

});
