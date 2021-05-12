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
  describe('equalValues, Checking Array values values', function() {

    it ("Simple test for Array values returns false",function() {
      expect(equalValues.areEqual(['Hello'], ['Goodbye'])).toEqual(false);
    })
    it ("Simple test for Array values returns true",function() {
      expect(equalValues.areEqual(['Hello'], ['Hello'])).toEqual(true);
    })

  })

  describe('equalValues, CodeWars tests', function() {

    it ("1) CodeWars tests",function() {
      expect(equalValues.areEqual([{a:3},{b:4}],[{a:'3'},{b:'4'}])).toEqual(false);
    })
    it ("2) CodeWars tests",function() {
      expect(equalValues.areEqual({a:[2,3],b:[4]},{b:[4],a:[2,3]})).toEqual(true);
    })
    it ("3) CodeWars tests",function() {
      expect(equalValues.areEqual({adam:3, laura:4}, {laura:4, adam:3})).toEqual(true);
    })
    it ("4) CodeWars tests",function() {
      expect(equalValues.areEqual({adam:3, laura:4, maisie:2}, {adam:3, laura:4})).toEqual(false);
    })
    it ("5) CodeWars tests",function() {
      expect(equalValues.areEqual({a:3},{b:4},{b:3},{a:4})).toEqual(false);
    })

  })
  

});
