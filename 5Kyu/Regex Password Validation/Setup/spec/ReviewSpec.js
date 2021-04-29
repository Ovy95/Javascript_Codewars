describe("ArrayDifference", function() {

  var password

  beforeEach (function () {
    password = new Password();
  });

  describe('validation, Atleast 6 characters Long', function() {

      it ("checks password entered 123456 a length of 6 characters long",function() {
        expect(password.validation("123456")).toEqual(true);
      })

  });

})