// Only change code below this line
function multiplyArrayFunction(myArry) {
  var product = 1;
  var sum = 0;
  for (let i = 0; i < myArry.length; i++) {
      for (let j = 0; j < myArry[i].length; j++) {
    
        product *= myArry[i][j];
        sum += myArry[i][j];

  
   }

 
    
  }
 return {
   product,
  sum
}
}
// Only change code above this line
console.log(multiplyArrayFunction([[2],[5,6,7],[8,9]]));
module.exports = multiplyArrayFunction;