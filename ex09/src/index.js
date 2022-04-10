// Only change code below this line
function myMutation(arr) {
  var word1 = arr[0].toLowerCase().split("");
  var word2 = arr[1].toLowerCase().split("");

  for (var i = 0; i < word2.length; i++) {
    if (!word1.includes(word2[i])) {
      return false;
    }
  }

  return true;
}

console.log(myMutation(["hello", "hey"]));
// Only change code above this line
module.exports = myMutation;
