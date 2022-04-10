// Only change code below this line
function splitArrayInGroups(arr, n) {
  var result = [];

  for (var i = 0; i < n; i++) {
    result.push(arr.slice(i * n, (i + 1) * n));
  }

  return result;
}

console.log(splitArrayInGroups(["a", "b", "c", "d"], 2));
;

// Only change code above this line
module.exports = splitArrayInGroups;
