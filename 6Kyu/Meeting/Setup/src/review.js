class Meeting {

   sortName(names) {
     
    var namesarray = names.toUpperCase().split(";")

    for (let index = 0; index < namesarray.length-1; index++) {

      let returnArray = []
      let filter = namesarray[index].toString()
      let names = filter.split(":")
      names[0] = (" "+names[0]+")")
      names[1] = "("+names[1]
      returnArray.push(names[1],names[0])
      return returnArray.toString()
      }


   }
}
