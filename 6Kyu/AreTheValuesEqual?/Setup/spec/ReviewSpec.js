describe("EqualValues", function() {

  var equalValues

  beforeEach (function () {
    equalValues = new EqualValues();
  });

  describe('equalValues, Checking strings', function() {

    it ("Simple test for strings returns false",function() {
      expect(equalValues.areEqual('Hello', 'Goodbye')).toEqual(false);
    })
    it ("Simple test for strings returns true",function() {
      expect(equalValues.areEqual('Hello', 'Hello' )).toEqual(true);
    })

  })
  

});
