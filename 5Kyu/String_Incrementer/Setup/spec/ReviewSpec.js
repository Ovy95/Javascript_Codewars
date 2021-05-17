describe("StringChecker", function() {

  var stringChecker

  beforeEach (function () {
    stringChecker = new StringChecker();
  });

  describe('incrementString', function() {

      it ("Hardcoded test passing",function() {
        expect(stringChecker.incrementString("foo")).toEqual("foo1");
      })
      it ("Empty String adds 1 to value",function() {
        expect(stringChecker.incrementString("")).toEqual("1");
      })
      
     

  });

 




})