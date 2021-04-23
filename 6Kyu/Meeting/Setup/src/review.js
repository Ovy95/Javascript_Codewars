class Meeting {

   sortName(names) {
     
    var namesarray = names.toUpperCase().split(";")
    let sortedNames = []

    for (let index = 0; index < namesarray.length  ; index++) {

      let returnArray = []
      let filter = namesarray[index].toString()
      let split = filter.split(":")
      split[0] = (" "+split[0]+")")
      split[1] = "("+split[1]

      returnArray.push(split[1],split[0])
      filter = returnArray.toString()
      sortedNames.push((filter))
      }
      
      sortedNames.sort()
      let list = ""
         for (let index = 0; index < sortedNames.length; index++) {
            list+=sortedNames[index]
         }

   return list

   }
}