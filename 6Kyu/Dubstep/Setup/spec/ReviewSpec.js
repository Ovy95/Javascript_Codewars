describe("Dubstep Class", function() {
  var dubstep;

  beforeEach (function () {
    dubstep = new Dubstep();
  });

  describe('Finds the Lyrices before the beat Drops', function() {
      it ("Return 'A' given AWUB",function() {
        expect(dubstep.lyrics("AWUB")).toEqual("A");
      })
      it ("Return 'A M' given AWUBMWUB",function() {
        expect(dubstep.lyrics("AWUBMWUB")).toEqual("A M");
      })

      it ("Return 'A M' given AWUBMWUB",function() {
        expect(dubstep.lyrics("WUBAWUBBWUBCWUB")).toEqual("A B C")
      })

      it ("Return 'A M' given AWUBMWUB",function() {
        expect(dubstep.lyrics("AWUBWUBWUBBWUBWUBWUBC")).toEqual("A B C")
      })

      
  })
  

  

});

