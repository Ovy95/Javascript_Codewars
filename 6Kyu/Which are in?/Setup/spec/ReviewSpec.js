describe("inArray", function() {

  var whichAre

  beforeEach (function () {
    whichAre = new InArray();
  });

  describe('filterArrays, Arrays having a length of 1', function() {

    it ("returns empty array if single values don't match",function() {
      expect(whichAre.filterArrays(["Apples"],["Pears"])).toEqual([]);
    })

    it ("Returns matching single arrays",function() {
      expect(whichAre.filterArrays(["Gym"],["Gym"])).toEqual(["Gym"]);
    })
  })
  

});
