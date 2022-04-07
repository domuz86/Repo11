//Only change code below this code

var myStr = "Paragon is the best!";

function useMethods(str){

   var myReverse = myStr.split("").reverse().join('');

   var countCharacters = myReverse.split(" ").map(x => x.length);
   

    return {
        myReverse,
        countCharacters
    };
}
//Only change code above his code
module.exports = useMethods;