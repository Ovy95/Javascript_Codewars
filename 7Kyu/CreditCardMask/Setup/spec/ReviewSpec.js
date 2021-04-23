describe("CreditCardMask", function() {
  var masking;

  beforeEach (function () {
    masking = new CreditCardMask();
  });

  describe('maskify function', function() {
      it ("returns input as it is first basic test, Given 1 returns 1 both as string values",function() {
        expect(masking.maskify("1")).toEqual("1");
      })

      it ("Given value of more then 4 characters hides first value",function() {
        expect(masking.maskify("12345")).toEqual("#2345");
      })
      it ("Given length of 12 hides first 8 digits",function() {
        expect(masking.maskify("64607935616")).toEqual("#######5616");
      })
      it ("Given length of 16 hides first 12 digits",function() {
        expect(masking.maskify("4556364607934797")).toEqual("############4797");
      })



      
  })
  

  

});

