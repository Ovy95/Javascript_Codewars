class BuildTower {

   towerBuilder(nFloors) {
    
    var materials = "";
    var spacers = "";
    var tower = [];

      for (var i = 1; i <= nFloors; i++) {
        materials = ("*").repeat((2 * i) - 1);
        spacers = (" ").repeat(nFloors - i);
        tower.push(spacers + materials + spacers);
      }
      console.log(tower)

    return tower;
  }

}