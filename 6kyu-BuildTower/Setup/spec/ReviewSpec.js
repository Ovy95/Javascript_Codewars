describe("BuildTower", function() {

  var tower;

  beforeEach (function () {
   tower = new BuildTower();
  });

  describe('towerBuilder', function() {
      it ("Given int value of 1. IT returns '[*]' ",function() {
        expect(tower.towerBuilder(1)).toEqual(["*"]);
      })


      it ("Given int value of 2. IT returns  [ * ,***]",function() {
        expect(tower.towerBuilder(2)).toEqual([' * ','***']);
      })

      it ("Given int value of 3. IT returns  [ * ,***,*****]",function() {
        expect(tower.towerBuilder(3)).toEqual([
          '  *  ', 
          ' *** ', 
          '*****'
        ]);
      })
       

  })

 


});
