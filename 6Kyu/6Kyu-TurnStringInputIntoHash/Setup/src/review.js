class HashMaker {

   stringToHash(stringValue) {
     if (stringValue===""){
       return {}
     }

    let keyValueArray = []
     let stringArray = stringValue.split(", ")
     for (let index = 0; index < stringArray.length; index++) {
      let Array = stringArray[index].split("=")
      Array[1] = parseInt(Array[1])
      keyValueArray.push(Array)
     }

    const obj = Object.fromEntries(keyValueArray);
    console.log(obj);
    return  obj
  }

}