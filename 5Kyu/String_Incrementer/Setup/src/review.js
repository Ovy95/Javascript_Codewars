class StringChecker {

   incrementString(value) {

   let matches = value.match(/(\d+)/);
    if (matches == null){
         return value +"1"
   }

   if (value.endsWith(matches[0]) ==  true) {
      value = value.split(matches[0])
      let increatementvalue = parseInt(matches[0])
      increatementvalue++
      value = value[0]+String(increatementvalue)
   }

      return value
   }
}  