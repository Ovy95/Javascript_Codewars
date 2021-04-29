describe("ArrayDifference", function() {

  var password

  beforeEach (function () {
    password = new Password();
  });

  describe('validation, Tests Atleast \n 6 characters Long \n contains lowercase letter', function() {

      it ("checks password entered 123456 should fail as it don't have a lowercase letter",function() {
        expect(password.validation("123456")).toEqual(false);
      })
      it (" 123456a fails test contains length and lowercase",function() {
        expect(password.validation("123456a")).toEqual(false);
      })
      it (" B123456a passes test UpperLower and length",function() {
        expect(password.validation("B123456a")).toEqual(true);
      })

  });


})