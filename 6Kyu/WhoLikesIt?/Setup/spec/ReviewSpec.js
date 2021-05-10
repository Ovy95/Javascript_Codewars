describe("ArrayDifference", function() {

  var jackBook
  beforeEach (function () {
    jackBook = new JackBook();
  });

  describe('likes', function() {

      it ("Given [] // Returns - no one likes this",function() {
        expect(jackBook.likes([])).toEqual("no one likes this");
      })

  })

});
