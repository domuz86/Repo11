//Create an array here

var myArr = [2, 4, 0, 8, 10];

//End of creating an array
//Create a function below this line

function myArrayFunction(myItems){

myArr[2] = myItems;
myItems = myArr;
return myItems;
};

myArrayFunction(6);

//End of creating function
module.exports = myArrayFunction;