// Only change code below this line
function myBouncer(arr) {
  var falseValues = [false, null, 0, "", undefined, NaN];
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (!falseValues.includes(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(myBouncer([7, "ate", "", false, 9]));
// Only change code above this line
module.exports = myBouncer;
