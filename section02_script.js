// UDEMY JAVASCRIPT TUTORIAL
// SECTION 2 - JAVASCRIPT LANGUAGE BASICS

// *****************************************************************************************
// What is Javascript?
// Lightweight - does not take up a lot of space
// Cross-platform - can be used across many different platforms
// Object-Orientated - a language based on objects

// Javascript allows dynamic effects and interactivity and modern web applications that we can iteract with

// HTML - responsible for content
// CSS - responsible for styling
// Javascript - responsible for adding programming capabilities, interactivity.

// *****************************************************************************************
// VARIABLES AND DATA TYPES
// A variable is a container in which we can store a value so it can be used multiple times
// Variable names should always be semantic and written in camelCase notation

var firstName = "John";
console.log(firstName);

var lastName = "Smith";
var age = 28;

var fullAge = true;
console.log(fullAge);

// *****************************************************************************************
//VARIABLE MUTATION AND TYPE COERCION//

*****************************************************************************************
// Type Coercion - JS automatically converts one type to another as needed.

var firstName = "John";
var age = 28;

console.log(firstName + " " + age);

// Many variables can be declared on the same line
var job, isMarried;
job = "architect";
isMarried = false;

console.log(
	firstName + "is a " + age + "year old " + job + ". Is he married?" + isMarried
);

*****************************************************************************************
//Variable mutation - Changes the value of a variable//

age = "twenty eight";
job = "driver";

// alerts create a pop up on the webpage
alert(
	firstName + "is a" + age + "year old" + job + ".Is he married?" + isMarried
);

// prompts create a pop up on the webpage that ask the user for data and log this data to the console
var lastName = prompt("What is his last name?");
console.log(firstName + " " + lastName);

// *****************************************************************************************
//BASIC OPERATORS - operators are like functions written in a specific way in JS//

// *****************************************************************************************
// Math Operators - plus, minus, multiplt etc

// var yearJohn = 2020 - 28;
// var yearMark = 2020 - 33;

// console.log(yearJohn);
// console.log(yearMark);

// as '2020' has been used multiple times is can be defined as a variable to avoid the need to rewrite
var currentYear, yearJohn, yearMark;
currentYear = 2020;
ageJohn = 28;
ageMark = 33;

yearJohn = currentYear - ageJohn;
yearMark = currentYear - ageMark;

console.log(yearJohn);
console.log(yearMark);

// Other math operator examples
console.log(currentYear + 2);
console.log(currentYear * 2);
console.log(currentYear / 2);

// *****************************************************************************************
// Logical Operators - there are three logical operators in JavaScript: || (OR), && (AND), ! (NOT).

ageJohn = 28;
ageMark = 33;
var johnOlder = ageJohn > ageMark;

// the concole below creates a boolean output
console.log(johnOlder);

// typeof Operators = do not require two things to compare (two operants) - returns what the 'type' is, for example a boolean
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof "Mark is older than John");
var x; //Undefined variable
console.log(typeof x);

// *****************************************************************************************
//OPERATOR PRECEDENCE - There is a table of precedence which shows which operators will be taken into account first

var currentYear = 2020;
var yearJohn = 1989;
var fullAge = 18;

// *****************************************************************************************
//Multiple Operators - The assignment operatior '=' will always be used last
var isFullAge = currentYear - yearJohn >= fullAge;

console.log(isFullAge);

// *****************************************************************************************
//Grouping - Using '()' to determine which operators should be completed first
var ageJohn = currentYear - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;

console.log(average);

// *****************************************************************************************
//Multiple assignments - assignments work from right to left eg) (3 + 5) * 4 - 6 is assigned to y which in turn is assigned to x
var x, y;
x = (3 + 5) * 4 - 6;
console.log(x);

var x, y;
x = y = (3 + 5) * 4 - 6;
console.log(x, y);

// *****************************************************************************************
//More Operators -

x *= 2; //same as writing x = x*2
console.log(x);

x++; //Adds one unit to the variable we're operating on
console.log(x);

x--; //Subtracts one unit to the variable we're operating on
console.log(x);

// *****************************************************************************************
// CODING CHALLENGE 01

var massJohn, heightJohn, massMark, heightMark;
massJohn = 70;
heightJohn = 1.8;
massMark = 90;
heightMark = 1.7;

bmiJohn = massJohn / (heightJohn * heightJohn);
console.log(bmiJohn);

bmiMark = massMark / (heightMark * heightMark);
console.log(bmiMark);

var highestbmi = bmiMark > bmiJohn; //creates a boolean
console.log("Is Mark's BMI greater than John's?" + ' ' + highestbmi);

// *****************************************************************************************
// IF/ELSE STATEMENTS - conditionals which allow us to make decisions using code

var firstName = "John";
var civilStatus = "Single";

if (civilStatus === "Married") {
	//=== is a logical operator that returns true or false
	console.log(firstName + " " + "is married!");
} else {
	console.log(firstName + " " + "is not married!");
}

// This can be more easily shown using a boolean
var isMarried = true;
if (isMarried) {
	console.log(firstName + " " + "is married!");
} else {
	console.log(firstName + " " + "is not married!");
}

// *****************************************************************************************
// CODING CHALLENGE 01 USING IF ELSE

var massJohn, heightJohn, massMark, heightMark;
massJohn = 70;
heightJohn = 1.8;
massMark = 60;
heightMark = 1.7;

bmiJohn = massJohn / (heightJohn * heightJohn);

bmiMark = massMark / (heightMark * heightMark);

if (bmiMark > bmiJohn) {
	console.log("Mark's BMI is higher that John's");
} else {
	console.log("John's BMI is higher than Mark's");
}

// *****************************************************************************************
// BOOLEAN LOGIC -  AND = && (true if all are true) OR = || (true if one is true) Not = ! (inverts true/false value)

var firstName = "John";
var age = 25;

if (age < 13) {
	console.log(firstName + "is a boy");
} else if (age >= 13 && age < 20) {
	console.log(firstName + " " + "is a teenager");
} else if (age >= 20 && age <= 30) {
	console.log(firstName + " " + "is a young man");
} else {
	console.log(firstName + " " + "is a man");
}

// *****************************************************************************************
// THE TERNARY OPERATOR - Also called the conditional operator, assigns a value to a variable based on a condition

var firstName = "John";
var age = 14;

//ternary operator has 3 parts that interact with the operator - has the "condition" first, then the "if" followed by an "else"
age >= 18
	? console.log(firstName + " " + "drinks beer")
	: console.log(firstName + " " + "drinks juice");

// a simple way assign values to variables using the ternary operator
var drink = age >= 18 ? "beer" : "juice"; // The "?" is the syntax to show we are asking a question. ":" means else
console.log(firstName + " " + "drinks " + drink);

// *****************************************************************************************
// SWITCH STATEMENTS - Similar to an "else if" statement, is a more simple syntax where there are multiple clauses

var firstName = "John";
var job = "instructor";

switch (job) {
	case "teacher":
	case "instructor": //you can add more that one case for each
		console.log(firstName + " teaches kids how to code.");
		break; //it will keep evaluating all cases even if the first is true unless a "break" is used
	case "driver":
		console.log(firstName + " drives an Uber");
		break;
	case "designer":
		console.log(firstName + " is a designer");
		break;
	default:
		console.log(firstName + " is a " + job);
}

var firstName = "John";
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

*****************************************************************************************
TRUTHY AND FALSY VALUES AND EQUALITY OPERATORS

*****************************************************************************************
Falsy values: undefined, null, 0, " ", NaN - these values will be determined as false when valued in an if else situation
Truthy values: all values that are not falsy

// Way to test if a variable has been defined or not
var height;

if (height) { //This will convert the height to false meaning we will enter the else block
	console.log("variable is defined");
} else {
	console.log("Variable has NOT been defined");
}

var height;
height = 0;

if (height || height === 0) {
	//by default a "0" will be considered undefined, an or "|" 0 must be added to avoid this
	console.log("Variable is defined");
} else {
	console.log("Variable has NOT been defined");
}

*****************************************************************************************
Equality operators (==) compare the height which is a number with a string using a non-strict equality operator.
It is always best practice to use "==="

var height;
height = 23;

if (height == "23") {
	console.log("The == operator does type coersion!");
}

Equality operators (===) strict compares for the same type of value. Best practice to use === always.
if (height === "23") {
	console.log("The == operator does type coersion!"); // AS this is false nothing will be logged
}

// *****************************************************************************************
//CODING CHALLENGE 02

let averageJohn = (89 + 120 + 200) / 3;
let averageMike = (89 + 400 + 200) / 3;
let averageMary = (89 + 120 + 100) / 3;

if (averageMike > averageMary && averageMike > averageJohn) {
	console.log("Mike's team is the winner with " + averageMike + " points");
} else if (averageJohn > averageMary && averageJohn > averageMike) {
	console.log("John's team is the winner with " + averageJohn + " points");
} else if (averageMary > averageJohn && averageMary > averageMike) {
	console.log("Mary's team is the winner  with " + averageMary + " points");
} else {
	console.log("There is a draw");
}

// *****************************************************************************************
// FUNCTIONS - Functions are one of the most fundamental concepts in JS
// They are used when a piece of code needs to be run many times
// Functions are important for the DRY rule - DON'T REPEAT YOURSELF

//The function syntax
function calculateAge(birthYear) {
	return 2020 - birthYear; //return results from a function
}

// let ageJohn = calculateAge(1990); //This calls the function
// console.log(ageJohn);

// A function is like a machine that recives an input, does something with it and then returns something

let ageJohn = calculateAge(1990);
let ageMike = calculateAge(1947);
let ageJane = calculateAge(1968);

console.log(ageJohn, ageMike, ageJane); //This saves having to write "2020 - birthYear;" multiple times

//One function can call another and they do not NEED to return something
function yearsUntilRetirement(year, firstName) {
	var age = calculateAge(year);
	var retirement = 65 - age;

	if (retirement > 0) {
		console.log(firstName + " retires in " + retirement + " years");
	} else {
		console.log(firstName + " retired " + -retirement + " years ago");
	}
}

yearsUntilRetirement(1990, "John"); // 1990 is the "year" part of thr funtion and John is the "firstName" part
yearsUntilRetirement(1947, "Mike");
yearsUntilRetirement(1968, "Jane");

// *****************************************************************************************
//FUNCTION STATEMENTS AND EXPRESSIONS
//Functions can be declared using function expressions you don't need to call function statements

// //Function Statement
// function whatDoYouDo(job, firstName) {}

//Function Expression
let whatDoYouDo = function(job, firstName) {
	switch (job) {
		case "teacher":
			return firstName + " teaches kids how to code."; //"return" stops the function so no "break" is needed

		case "driver":
			return firstName + " is an Uber driver.";

		case "designer":
			return firstName + " designs nice things.";

		default:
			return firstName + " does something else.";
	}
};

console.log(whatDoYouDo("teacher", "John"));
console.log(whatDoYouDo("designer", "Jane"));
console.log(whatDoYouDo("retired", "Mike"));

//Statements and expression are a global concept in JS.
// Expression are pieces of code that always produce a value - anything that produces a result
// Statements perform actions but do not produce immediate results (eg if/else statements or function declarations)

// *****************************************************************************************
//ARRAYS - Allows you to "bundle" variables
//Arrays are "0" based, meaning the first element is 0, the second is 1 and so on

//Initialise new array
let names = ["John", "Mike", "Jane"]; //This is an array of names
let years = ["1990", "1998", "1978"];

//Retrieving data from the array
console.log(names[0]); // The "0" is the index is "John"
console.log(names); // Logs the entire array
console.log(names.length); // Shows how many elements in the array

// Changing a particular piece of data
names[1] = "Ben";
console.log(names);

// Access a position which is not yet there
names[5] = "Mary";
console.log(names);

// Add a value as the last element in an array
names[3] = "Mary";
console.log(names.length);
console.log(names);

//Different data types
let John = ["John", "Smith", 1989, "teacher", false];

// Add a new element to the end of an array
John.push("blue");
console.log(John);

// Add a new element to the beginning of an array
John.unshift("Mr");
console.log(John);

// Removes an element from the end of an array
John.pop();
console.log(John);

// Removes an element from the beginning of an array
John.shift();
console.log(John);

// Returns the position of an argument that passed in an array
console.log(John.indexOf(1989));

// Returns the position of an argument that passed in an array - If an element is not in the array it will return -1
// This is very useful for testing if a value is in the array or not
console.log(John.indexOf(1980));

//"John.indexOf("designer")" will equal -1 as is is not in the array, we are then testing if
//-1 equals -1, it does. Therefore, "John is not a designer".
let isDesigner =
	John.indexOf("designer") === -1
		? "John is not a designer"
		: "John is a Designer";
console.log(isDesigner);

// *****************************************************************************************
//CODING CHALLENGE 03

// Create a function to determine the tip amount
function tipcalculator(bill) {
	let percentage;
	if (bill < 50) {
		percentage = 0.2;
	} else if (bill >= 50 && bill < 200) {
		percentage = 0.15;
	} else {
		percentage = 0.1;
	}
	return percentage * bill;
}

// Test the function is working
console.log(tipcalculator(10));

// Create an array with the values
let bills = [124, 48, 268];
let tips = [
	tipcalculator(bills[0]), // Specifies which value from the array to use
	tipcalculator(bills[1]),
	tipcalculator(bills[2])
];
let finalValues = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// Log the Array values
console.log(tips, finalValues);

// *****************************************************************************************
//OBJECTS AND PROPERTIES

//OBJECTS - The single most important feature in Javascript
// They allow you to access an element of an array by a specific name, not its index position
// Objects can be used to group together different variables that belong together in no particular order
// The fundamental difference between arrays and objects is that in objects the order doesn not matter at all

//Creating a new object - OBJECT LITERAL
let John = {
	firstName: "John", // "firstName" is a "key" and "John" is a "value", togther they are called a key value pair
	lastName: "Smith",
	birthYear: 1990,
	family: ["jane", "Mark", "Bob", "Emily"],
	isMarried: false
};

// In order to obtain a property from the objects by using the dot notation "object.property"
console.log(John.firstName);

// In order to obtain a property from the objects by using the straight bracket notation "object[property]"
console.log(John["lastName"]);

let x = "birthYear";
console.log(John[x]);

// Here the dot notation is being used to change/mutate the data
John.job = "designer";
John["isMarried"] = true;
console.log(John);

//Creating a new object - NEW OBJECT SYNTAX
let Jane = new Object();
Jane.firstName = "Jane";
Jane.birthYear = "1989";
Jane["lastName"] = "Smith";

console.log(Jane);

*****************************************************************************************
OBJECTS AND METHODS
When a function is attached to an object it is then called a method

// We want to create a function/method in order to calculate John age
let John = {
	firstName: "John",
	lastName: "Smith",
	birthYear: 1992,
	family: ["jane", "Mark", "Bob", "Emily"],
	isMarried: false,
	calcAge: function() {
		this.age = 2020 - this.birthYear; //"this.birthYear means the current object so, John's birth year"
	}
};

John.calcAge(); //Calls the funtion
console.log(John); // Log the object to the console

// *****************************************************************************************
//CODING CHALLENGE 04

let John = {
	firstName: "John",
	lastName: "Smith",
	massJohn: 150,
	heightJohn: 1.8,
	calcBmi: function() {
		this.bmi = this.massJohn / (this.heightJohn * this.heightJohn);
		return this.bmi;
	}
};
John.calcBmi(); //Calls the funtion
console.log(John); // Log the object to the console

let Mark = {
	firstName: "Mark",
	lastName: "Hat",
	massMark: 90,
	heightMark: 1.7,
	calcBmi: function() {
		this.bmi = this.massMark / (this.heightMark * this.heightMark);
		return this.bmi;
	}
};

Mark.calcBmi(); //Calls the funtion
console.log(Mark); // Log the object to the console

John.calcBmi(); //Calls the funtion
Mark.calcBmi(); //Calls the funtion
console.log(John, Mark); // Log the object to the console

if (John.calcBmi() > Mark.calcBmi()) {
	console.log(John.firstName + " has a higher BMI than " + Mark.firstName);
} else if (John.calcBmi() < Mark.calcBmi()) {
	console.log(Mark.firstName + " has a higher BMI than " + John.firstName);
} else {
	console.log("They have the same BMI");
}

// *****************************************************************************************
//LOOPS AND ITERATION
// Loops are a type of control structure allowing the same code to loop and automate repetitive tasks

//THE FOR LOOP
for (let i = 0; i < 10; i++) {
	console.log(i);
}

// What is happening here..? i=0, 0 < 10 true, log i to console, i++
// When x=10 we exit the loop

//Add 2 to each loop
for (let i = 0; i < 20; i += 2) {
	console.log(i);
}

let John = ["John", "Smith", 1989, "teacher", false];

// "i=0" is used as this is the first value in the array
// At the end of each array the "i++" increases the counter value by 1
// We use "i < John.length" to run the loop for the length of the array
for (let i = 0; i < John.length; i++) {
	console.log(John[i]);
}

// *****************************************************************************************
//CONTINUE STATEMENTS

//Only execute the values that are strings
let John = ["John", "Smith", 1989, "teacher", false, "blue"];
for (let i = 0; i < John.length; i++) {
	if (typeof John[i] !== "string") {
		continue;
	} //!== is the strict different operator
	console.log(John[i]);
}

// *****************************************************************************************
//BREAK STATEMENTS - end the entire loop as soon as an error is found
let John = ["John", "Smith", 1989, "teacher", false, "blue"];
for (let i = 0; i < John.length; i++) {
	if (typeof John[i] !== "string") {
		break;
	} //!== is the strict different operator
	console.log(John[i]);
}

// *****************************************************************************************
//LOOPING BACKWARDS
for (let i = John.length - 1; i >= 0; i--) {
	console.log(John[i]);
}

// *****************************************************************************************
//CODE CHALLENGE 05 PART 1

// Create a method
let John = {
	fullName: "John Smith",
	bill: [124, 48, 268, 180, 42],
	calctip: function() {
		this.tips = [];
		this.finalValues = [];

		for (let i = 0; i < this.bill.length; i++) {
			//Here, we are reading the bills array first in order to determine the length
			//Determine the percentage based on the tipping rules
			let bill = this.bill[i];
			let percentage;

			if (bill < 50) {
				percentage = 0.2;
			} else if (bill >= 50 && bill < 200) {
				percentage = 0.15;
			} else {
				percentage = 0.1;
			}

			//Add results to the corresponding arrays
			this.tips[i] = bill * percentage;
			this.finalValues[i] = bill + bill * percentage;
		}
	}
};

// John.calctip();
// console.log(John);

// *****************************************************************************************
//CODE CHALLENGE 05 PART 2

// Create a method
let Mark = {
	fullName: "Mark Smith",
	bill: [77, 6, 110, 45],
	calctip: function() {
		this.tips = [];
		this.finalValues = [];

		for (let i = 0; i < this.bill.length; i++) {
			//Here, we are reading the bills array first in order to determine the length
			//Determine the percentage based on the tipping rules
			let bill = this.bill[i];
			let percentage;

			if (bill < 100) {
				percentage = 0.2;
			} else if (bill >= 100 && bill < 300) {
				percentage = 0.1;
			} else {
				percentage = 0.25;
			}

			//Add results to the corresponding arrays
			this.tips[i] = bill * percentage;
			this.finalValues[i] = bill + bill * percentage;
		}
	}
};

function calcAverage(tips) {
	let sum = 0;
	for (let i = 0; i < tips.length; i++) {
		sum = sum + tips[i];
	}
	return sum / tips.length;
}

//Calculations
John.calctip();
Mark.calctip();

John.average = calcAverage(John.tips);
Mark.average = calcAverage(Mark.tips);
console.log(John, Mark);

if (John.average > Mark.average) {
	console.log(
		John.fullName +
			"'s family pays more tips, with an average of $" +
			John.average
	);
} else if (Mark.average > John.average) {
	console.log(
		Mark.fullName +
			"'s family pays more tips, with an average of $" +
			Mark.average
	);
}

// *****************************************************************************************
//JAVASCRIPT VERSIONS

//ES5 is ready to be used today
//ES6, ES7, ES8 does not necessarily work on all browsers and need to be converted back to ES5 