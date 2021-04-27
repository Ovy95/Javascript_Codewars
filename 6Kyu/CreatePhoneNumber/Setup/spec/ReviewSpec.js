describe("createPhoneNumber", function() {

  var create

  beforeEach (function () {
    create = new createPhoneNumber();
  });

  describe('sortNames', function() {

    it ("Returns harded answer checking setup is working",function() {
      expect(create.phoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).toEqual("(123) 456-7890");
    })
    
    


  })

 


});
