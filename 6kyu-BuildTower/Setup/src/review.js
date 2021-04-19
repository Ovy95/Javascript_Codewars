class BuildTower {

  towerBuilder (nFloors){
    let tower = ['*']

    if (nFloors == 1){
      return tower
    }
   
    for (let index = 1; index < nFloors; index++) {
      let materials = "*"
      let levels = ""
      levels += materials.repeat(index+2)
    }

    return tower
  }



  }