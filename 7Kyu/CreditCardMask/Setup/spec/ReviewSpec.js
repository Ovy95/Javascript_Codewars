describe("CreditCardMask", function() {
  var masking;

  beforeEach (function () {
    masking = new CreditCardMask();
  });

  describe('maskify function', function() {
      it ("returns input as it is first basic test, Given 1 returns 1 both as string values",function() {
        expect(masking.maskify("1")).toEqual("1");
      })

      // it ("returns even",function() {
      //   expect(masking.maskify("it cook")).toEqual("t ck");
      // })
      // it ("returns even",function() {
      //   expect(masking.maskify("e")).toEqual("");
      // })
      // it ("returns even",function() {
      //   expect(masking.maskify("a")).toEqual("");
      // })
      // it ("returns even",function() {
      //   expect(masking.maskify("o")).toEqual("");
      // })
      // it ("returns even",function() {
      //   expect(masking.maskify("u")).toEqual("");
      // })
      
  })
  

  

});

