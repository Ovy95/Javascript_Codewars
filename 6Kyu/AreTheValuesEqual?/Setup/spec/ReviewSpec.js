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
  describe('equalValues, Checking Object values values', function() {

    it ("Simple test for Object values returns false",function() {
      expect(equalValues.areEqual({['Hello']:"Jack"}, {['Goodbye']:"Jack"})).toEqual(false);
    })
    it ("Simple test for Object values returns true",function() {
      expect(equalValues.areEqual({'Hello':"Jack"}, {'Hello':"Jack"})).toEqual(true);
    })

  })
  

});
