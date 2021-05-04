describe("Hash", function() {

  var input;

  beforeEach (function () {
   input = new HashMaker();
  });

  describe('HashMaker', function() {

      it ("Hardcoded return object",function() {
        expect(input.stringToHash("a=1")).toEqual({a:1});
      })

  })

 


});
