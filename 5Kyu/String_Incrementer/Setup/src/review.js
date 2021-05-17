class StringChecker {

   incrementString(value) {

      var str = value.replace(/[0-9]/gi,'');
      var num = value.replace(/[^0-9]/gi,'');
      num++;
      var t = str + num;
      if((value.length - t.length) ==2)
        str +='00';
      if((value.length - t.length) ==1)
        str +='0';
      return str+num;
   }
}  