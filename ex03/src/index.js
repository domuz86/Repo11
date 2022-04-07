//Create a myPetsArray array here

var myPetsArray = ["Dog", "Cat"]; 

//End of myPetsArray array
//Create a function below this line

function myArrayFunction(myPets){

    myPetsArray.push("Bird", "Fish");

    var myNwePets = myPetsArray;

    var firstPet = myPetsArray.shift();

    var lastPet = myPetsArray.pop();

    myNwePets.unshift("Lion");

    return myNwePets;
}

//End of creating a function
module.exports = myArrayFunction;
