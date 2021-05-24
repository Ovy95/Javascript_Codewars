class Permutation {

   minPermutation(n) {
      let num = n.toString().split('').sort((a,b)=>a-b).join('');
      let count = 0;
      
      for (let i = 0; i < num.length; i++) {
        if (num[i] === '0') {
          count++;
        }
      }
    
      num = num.split('');
      if (num[0] === '-') {
        num.splice(1, count)
        num.splice(2, 0, '0'.repeat(count));
      } else {
        num.splice(0, count)
        num.splice(1, 0, '0'.repeat(count));
      }
      num = num.join('');
      
      return Number(num);

   }
}