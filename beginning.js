//String ***************************
// Determines the length of the string
"Hello, Charleston, Paper".length

//This merges the two strings into one string
var a = "Hello";
var b = "Bye";

var c = a.concat(b);

Result: "HelloBye"

//This is creating the variable a and then I am asking it to search for the letter "h" and tell me what position it is in.  In this case it responds with 1.
var a = "Chris, Class, Car"

a.indexOf("h");

Result: 1

//Integer ****************************
//This is calulating the square root of 9
Math.sqrt(9)

Result: 3

//This is calculates 5 to the 6th power (5*5*5*5*5*5)
Math.pow(5,6)

Result: 15625

//This returns the absolute value of -4.55
Math.abs(-4.55)

Result: 4.55

//Boolean Either True or False ****************************
//This is determining if the string has more than 10 characters and will return a true statement
"I'm coding like a champ!".length > 10

// If the length of the name is more than 10 characters "You have a long name!" will appear on screen and if it is less than 10 "Your name is not so long." will appear
if ("name".length > 12 ) {
    console.log("You have a long name!");
}
  else {
    console.log("Your name is not so long.")
  }

//This is determining if the type and value of both numbers are the same.  This gives back a false statement
10 === 8


//Array ****************************
var cars = ["Chevrolet", "Ford", "BMW", "Toyota"]

//Turns the cars array into a string
var together = cars.join();

Result: "Chevrolet,Ford,BMW,Toyota"

//Sorts the array alphabetically
.cars.sort();

Result: ["BMW", "Chevrolet", "Ford", "Toyota"]

//This is going to position 1 and adding the term new brands and then sliding the rest to the right.
var bigcar = cars.splice(1,0,"Buick","Honda");

Result: ["BMW", "Buick", "Honda", "Chevrolet", "Ford", "Toyota"]

//Function **************************

//This is taking the length of the two names and giving the total # of characters
function firstFunction(x, y) {

  var distance = "name".length + "name".length;
  return sum;
}

function secondFunction() {

}


//Object ********************************
//This is creating all of the information for mySchool object and at the bottom I am pulling information from mySchool object.
var mySchool = new Object();
mySchool.college = "College of Charleston";
mySchool.degree = "Business Administration";
mySchool.year = 2013;

To access:
mySchool["college"] = "College of Charleston"
mySchool["degree"] = "Business Administration"
mySchool["year"] = "2013"
