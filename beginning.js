//String ***************************
// Determines the length of the string
"Hello, Charleston, Paper".length

//This merges the two strings into one string
var a = "Hello";
var b = "Bye";

var c = a.concat(b);

Result: "HelloBye"

/* This is creating the variable a and then I am asking it to search for the letter "h" and tell me what position it is in.  In this case it responds with 1. */
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
/* This is determining if the string has more than 10 characters and will return a true statement */
"I'm coding like a champ!".length > 10

/* If the length of the name is more than 10 characters "You have a long name!" will appear on screen and if it is less than 10 "Your name is not so long." will appear */
if ("name".length > 12 ) {
    console.log("You have a long name!");
}
  else {
    console.log("Your name is not so long.")
  }

/* This is determining if the type and value of both numbers are the same.  This gives back a false statement */
10 === 8



//Array ****************************
var cars = ["Chevrolet", "Ford", "BMW", "Toyota"]

//Turns the cars array into a string
var together = cars.join();

Result: "Chevrolet,Ford,BMW,Toyota"

//Sorts the array alphabetically
.cars.sort();

Result: ["BMW", "Chevrolet", "Ford", "Toyota"]

/*This is going to position 1 and adding the term new brands and then sliding the rest to the right. */
var bigcar = cars.splice(1,0,"Buick","Honda");

Result: ["BMW", "Buick", "Honda", "Chevrolet", "Ford", "Toyota"]



//Function **************************
/* This is saying that if the 2 parameters time eachother are greater than 20 it will say one thing and if it they are less than 20 it will say another. */
function mass(num1, num2) {
  if ( num1 * num2 > 20){
  console.log("Wow, that is a big number!");
  }
  else {
  console.log("That is all that you got?");
  }
}

mass(4,2);
Result: That is all that you got?

mass(7,3);
Result: Wow, that is a big number!

/* This is telling the computer to show Hi. how are you anytime the function sayHello is used */
function sayHello() {
  console.log('Hi, how are you doing?');
}

Result: Hi, how are you doing?


//This is storing the function of calculating area and then calculating it
function getArea(width, height) {
  return width * height;
}

getArea(4, 5);

Result: 20



//Object ********************************

//To see what type of candy is available
var availableCandy = {
  bar:'Snickers',
  sweet: 'Skittles',
  chocolate: 'Reeses',
  gummy: 'gushers',
}

//Checks what kind of gummy candy is available
availableCandy.gummy

//This is scanning the saved information and returning the name
var myobj = new Object {
  name:'Chris',
  age: 23,
  getName: function() {
    return this.name;
  }
}

myobj.getName();

Result: "Chris"
//To change a data field just do (object).(property name) = (new property value)

/* This is providing the information of how many rooms our home has and how many our being used. */
var home = {
  name:'Casa',
  rooms: 3,
  booked: 1,

  checkAvailability: function() {
    return this.rooms - this.booked;
  }
}

home.checkAvailability();

Result: 2

function candy (chocolate, available, sold) {
  this.chocolate = chocolate;
  this.available = available;
  this.sold = sold;
  this.checkCandy = function() {
    return this.available - this.sold;
  };
}

var bar = new candy;
  bar.chocolate = 'Snickers';
  bar.available = 20;
  bar.sold = 10;
