describe("CreditCardMask", function() {
  var masking;

  beforeEach (function () {
    masking = new CreditCardMask();
  });

  describe('maskify function', function() {
      it ("returns input as it is first basic test, Given 1 returns 1 both as string values",function() {
        expect(masking.maskify("1")).toEqual("1");
      })

      it ("returns even",function() {
        expect(masking.maskify("12345")).toEqual("#2345");
      })


      
  })
  

  

});

