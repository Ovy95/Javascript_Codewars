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

      it ("Testing string abc1 should equal abc2",function() {
        expect(stringChecker.incrementString("abc1")).toEqual("abc2");
      })
      it ("Testing string jack99 should equal jack100",function() {
        expect(stringChecker.incrementString("jack99")).toEqual("jack100");
      })
      it ("Testing string jack99 should equal jack100",function() {
        expect(stringChecker.incrementString("foobar000")).toEqual("foobar001");     
      })


      
  

  });

 




})