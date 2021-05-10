describe("ArrayDifference", function() {

  var jackBook
  beforeEach (function () {
    jackBook = new JackBook();
  });

  describe('likes', function() {

      it ("Given [] // Returns - no one likes this",function() {
        expect(jackBook.likes([])).toEqual("no one likes this");
      })

      it ("Given [Peter] // Returns - Peter likes this",function() {
        expect(jackBook.likes(["Peter"])).toEqual("Peter likes this");
      })

      it ("Given ['Jacob', 'Alex'] // Returns - Jacob and Alex like this",function() {
        expect(jackBook.likes(['Jacob', 'Alex'])).toEqual("Jacob and Alex like this");
      })


  })

});
