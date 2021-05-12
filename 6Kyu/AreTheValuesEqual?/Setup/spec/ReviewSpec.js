describe("EqualValues", function() {

  var equalValues

  beforeEach (function () {
    equalValues = new EqualValues();
  });

  describe('equalValues', function() {

    it ("hardcoded true returned passed first test",function() {
      expect(equalValues.areEqual({},{})).toEqual(true);
    })

  })
  

});
