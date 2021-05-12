class EqualValues {

   areEqual(value1,value2 ){
let x=JSON.stringify(value1)
let y=JSON.stringify(value2)

x = [...x].sort().join("");
y = [...y].sort().join("");
 return x === y

    
   }
}