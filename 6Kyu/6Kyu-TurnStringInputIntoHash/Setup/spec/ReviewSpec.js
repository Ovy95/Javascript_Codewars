describe("Hash", function() {

  var input;

  beforeEach (function () {
   input = new HashMaker();
  });

  describe('HashMaker', function() {

      it ("Hardcoded return object",function() {
        expect(input.stringToHash("a=1")).toEqual({'a':1});
      })
      it ("codewars test return  correct object",function() {
        expect(input.stringToHash("a=1, b=2, c=3, d=4")).toEqual({'a':1,'b':2,'c':3,'d':4});
      })
      it ("Edge Case Empty input returns empty Object",function() {
        expect(input.stringToHash("")).toEqual({});
      })


  })


 


});
