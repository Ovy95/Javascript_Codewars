describe("BuildTower", function() {

  var tower;

  beforeEach (function () {
   tower = new BuildTower();
  });

  describe('towerBuilder', function() {
      it ("Given int value of 1 returns one '[*]' ",function() {
        expect(tower.towerBuilder(1)).toEqual(["*"]);
      })


  })

 


});
