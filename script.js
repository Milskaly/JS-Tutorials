// UDEMY JAVASCRIPT TUTORIAL
var firstName = "John";
var age = 28;

//Type Coercion//
console.log(firstName + " " + age);

var job, isMarried;
job = "teacher";
isMarried = false;
console.log(
	firstName + "is a" + age + "year old" + job + ".Is he married?" + isMarried
);

//Variable mutation//
age = "twenty eight";
job = "driver";

alert(
	firstName + "is a" + age + "year old" + job + ".Is he married?" + isMarried
);

var lastName = prompt("What is his last name?");
console.log(firstName + " " + lastName);

// Math Operators

var currentYear, yearJohn, yearMark;
currentYear = 2019;
ageJohn = 28;
ageMark = 33;

yearJohn = currentYear - ageJohn;
yearMark = currentYear - ageMark;
console.log(yearJohn);

console.log(currentYear + 2);
console.log(currentYear * 2);
console.log(currentYear / 2);

// Logical Operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

// typeof Operators = only require one operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof "Mark is older than John");
var x; //Undefined variable
console.log(typeof x);

//Operator Precedence = what operator is execured first
var currentYear = 2019;
var yearJohn = 1987;
var fullAge = 18;

//Multiple Operators
var isFullAge = currentYear - yearJohn >= fullAge;
console.log(isFullAge);

//Grouping
var ageJohn = currentYear - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

//Multiple assignments = assignments work from right to left eg) (3 + 5) * 4 - 6 is assigned to y which in turn is assigned to x
var x, y;
x = (3 + 5) * 4 - 6; //
console.log(x);

var x, y;
x = y = (3 + 5) * 4 - 6; //
console.log(x, y);

//More Operators
x *= 2;
console.log(x);

x++; //Adds one unit to the variable we're operating on
console.log(x);

x--; //Subtracts one unit to the variable we're operating on
console.log(x);

// Coding Challenge 01
var massJohn, heightJohn, massMark, heightMark;
massJohn = 70;
heightJohn = 1.8;
massMark = 90;
heightMark = 1.7;

bmiJohn = massJohn / (heightJohn * heightJohn);
console.log(bmiJohn);

bmiMark = massMark / (heightMark * heightMark);
console.log(bmiMark);

var highestbmi = bmiMark > bmiJohn;
console.log("Is Mark's BMI greater than John's?" + " " + highestbmi);

// If / else statements conditional allowing us to make decisions using code

var firstName = "John";
var civilStatus = "Single";

if (civilStatus === "Married") {
	console.log(firstName + " " + "is married!");
} else {
	console.log(firstName + " " + "is not married!");
}

var isMarried = true;
if (isMarried) {
	console.log(firstName + " " + "is married!");
} else {
	console.log(firstName + " " + "is not married!");
}

// Coding Challenge 01 using If/Else

var massJohn, heightJohn, massMark, heightMark;
massJohn = 70;
heightJohn = 1.8;
massMark = 60;
heightMark = 1.7;

bmiJohn = massJohn / (heightJohn * heightJohn);
console.log(bmiJohn);

bmiMark = massMark / (heightMark * heightMark);
console.log(bmiMark);

if (bmiMark > bmiJohn) {
	console.log("Mark's BMI is higher that John's");
} else {
	console.log("John's BMI is higher than Mark's");
}

Boolean Logic AND = && (true if all are true) OR = || (true if one is true) Not = ! (inverts true/false value)

var firstName = "John";
var age = 20;

if (age < 13) {
	console.log(firstName + "is a boy");
} else if (age >= 13 && age < 20) {
	console.log(firstName + " " + "is a teenager");
} else {
	console.log(firstName + " " + "is a man");
}

The ternary Operator

var firstName = "john";
var age = 14;

age >= 18
	? console.log(firstName + " " + "drinks beer")
	: console.log(firstName + " " + "drinks juice");

var drink = age >= 18 ? "beer" : "juice";
console.log(drink);

Switch Statements

var job = "driver";
switch (job) {
	case "teacher":
		console.log(firstName + "teaches kids how to code.");
		break;
	case "driver":
		console.log(firstName + "drives an Uber");
		break;
	case "designer":
		console.log(firstName + "is a designer");
		break;
	default:
// 		console.log(firstName + "is unemployed");
}

var firstName = "john";
var age = 14;
switch (true) {
	case age < 13:
		console.log(firstName + " " + "is a boy");
		break;
	case age >= 13 && age < 20:
		console.log(firstName + " " + "is a teenager");
		break;
	case age >= 20 && age < 30:
		console.log(firstName + " " + "is a young man");
		break;
	default:
		console.log(firstName + " " + "is a man");
}

Truthy and Falsy Values and equality operators

Falsy values: undefined, null, 0, " ", NaN - these values will be determined as false when valued in an if else situation
Truthy values: all values that are not falsy

var height;
height = 23;

if (height || height === 0) {
	//This means 0 will now be included as a truthy value
	console.log("variable is defined");
} else {
	console.log("Variable has NOT been defined");
}

//Equality operators (==) compare the height which is a number with a string using a non-stirck equality operator.
if (height == "23") {
	console.log("The == operator does tpe coersion!");
}

//Equality operators (===) strict compares for the same type of value. Best practice to use === always.

if (height === "23") {
	console.log("The == operator does tpe coersion!");
}

Coding Challenge 02

let averageJohn = (89 + 120 + 150) / 3;

let averageMike = (89 + 120 + 200) / 3;

let averageMary = (89 + 120 + 300) / 3;

switch (true) {
	case (averageJohn && averageMary) < averageMike:
		console.log("Mike's team is the winner");
		break;
	case (averageMike && averageMary) < averageJohn:
		console.log("John's team is the winner");
		break;
	case (averageMike && averageJohn) < averageMary:
		console.log("Mary's team is the winner");
		break;
	case averageMike === averageJohn:
		console.log("There is a draw");
}

Functions - machine that recives input, does something with it and then returns something
Functions are important for the DRY rule - DON'T REPEAT YOURSELF

function calculateAge(birthYear) {
  return 2018 - birthYear;
}
let ageJohn = calculateAge(1990);
let ageMark = calculateAge(1967);
let ageJane = calculateAge(1934);
console.log(ageJohn, ageMark, ageJane);

function yearsUntilRetirement(year, firstName) {
  let age = calculateAge(year);
  let retirement = 65 - age;

  if (retirement > 0) {
    console.log(firstName + " " + "retires in" + " " + retirement + "years");
  } else {
    console.log(firstName + " " + "is already retired");
  }
}

yearsUntilRetirement(1990, "John");
yearsUntilRetirement(1967, "Mark");
yearsUntilRetirement(1934, "Jane");

//Fizz Buzz
