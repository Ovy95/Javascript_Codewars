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

  describe('filterArrays, Arrays having a length of 2', function() {

    it ("Returns matching single arrays",function() {
      expect(whichAre.filterArrays(["ice","xyz"],["mice","monkeys"])).toEqual(["ice"]);
    })
    it ("given air and berry returns both as they match up",function() {
      expect(whichAre.filterArrays(["berry","air"],["stairs","blueberry"])).toEqual(["air","berry"]);
    })

  })
  describe('filterArrays,Codewars  tests', function() {

    it ("returns live, strong",function() {
      expect(whichAre.filterArrays(["xyz", "live", "strong"],["lively", "alive", "harp", "sharp", "armstrong"])).toEqual(["live", "strong"]);
    })
    it ("No matches returns empty array",function() {
      expect(whichAre.filterArrays(["tarp", "mice", "bull"],["lively", "alive", "harp", "sharp", "armstrong"])).toEqual([]);
    })
    it ("all matching returns them in correct order",function() {
      expect(whichAre.filterArrays(["live", "strong", "arp"],["live", "strong", "arp"])).toEqual(["arp", "live", "strong"]);
    })

  })
  
  

});
