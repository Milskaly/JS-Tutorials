// UDEMY JAVASCRIPT TUTORIAL
// SECTION 3 - HOW JAVASCRIPT WORKS BEHIND THE SCENES

// *****************************************************************************************
// What happens to our code?

//Javascript is always hosted in a browser environment, this is where Javascript runs,
//There can be other hosts but typically it is a browser.

//The host has a 'Javascript Engine'/program that executes JS code
//Different browsers may have different engines.

//Firstly, the code is read by a 'Parser' which reads the code and checks if the syntax is correct.
//It will throw an error if there are any mistakes.

//If there are no errors the Parser creates an 'Abstract Syntax Tree' which is then translated into 'Machine Code'
//This code is not longer JS but a set of instructions tha tcan be executed directly by the computers processor
// After our code has been translated into Machine Code it is then executed

// *****************************************************************************************
// Execution Contexts and Execution Stacks

//All JS code runs in an environment called "Execution Contexts"
//An Execution context is a box or container which stores variables and in which a piece of code is evaluated and executed
//The default execution context is the 'Global Execution Context'
//In the 'Global Execution Context' code that is not inside any function is executed - it is used for variables and functions that are not within any functions
//An Global Execution Context' can be thought if as an object. 'The Global Execution Context'is associated with the Global object. In the case of a browser this is the 'window object'
//Therefore, everything we declare in the global context automatically gets attached in the window object in the browser.
//For example if we use lastName, this is the same as window.lastName. It is like lastName is a property of the window object.
//Properties are just variables attached to objects

// An example - Each time we call  afunction, it gets it's own new execution context

var name = "John"; //not in any function therefore, in the Global Execution Context

function first() {
	//Function declaration is also in the Global Execution Context
	var a = "Hello!"; // This will be stored within the 'first' execution context
	second(); // Calling the second function means a new execution context wll be formed again ('second' execution context) and placed on the top of the execution stack.
	var x = a + name;
}

function second() {
	//Function declaration is also in the Global Execution Context
	var b = "Hi!"; //Now variable b is stored in the ('second' execution context)
	third(); // Calling the third function means a new execution context wll be formed again ('third' execution context) and placed on the top of the execution stack.
	var z = b + name;
}

function third() {
	//Function declaration is also in the Global Execution Context
	var c = "Hey!"; // Now within the 'third' execution context, there are only two declarations and nothing more meaning the function is returned
	var z = c + name;
}

//Here, the first funtion is called, therefor a new execution context is formed.
// This new context is put on top of the current cntext forming the 'Execution Stack'
first();

//After all the functions have completed they are removed from the "Execution stack" from top to bottom leaving just the 'Global Execution Context' remains

// *****************************************************************************************
// Execution Contexts in Detail - How a new Execution Context is created

// An execution context object contains
// 1) A Variable Object - contains function arguments, inner variable declaration and function declarations
// 2) A Scope Chain - contains the current variable object and the variable object of all its parents
// 3) "This" variable

// *****************************************************************************************
//There are two phases to the creation of an execution context

//CREATION PHASE - The properties of the execution context object are defined
// A) Creation of the Variable Object
// B) Creation of the Scope Chain
// C) Determine value of the "this" variable

//EXECUTION PHASE
//The code of the function that generated the current execution context is run line by line
//All the varaibles are defined

// *****************************************************************************************
// A) CREATION OF THE VARIABLE OBJECT

//The arguement object is created, containing all the arguments that were passed into the function

// Code is scanned for 'function declarations'
// For each function a property is created in the Variable Object, pointing to the function
//This means, all the functions will be sotred within the variable object, even before the code starts executing

// Code is scanned for 'variable declarations'
// For each varaible, a property id created in the Variable Object, and set to undefined.

//The last two points are called HOISTING
// Functions and variables are 'hoisted' in JS which means they are avalible before the execution phase actually starts
// They are hoisted differently
// Functions are defined before the execution starts
// Varaibles are set up to udefined and will only be defined in the execution phase

// *****************************************************************************************
// HOISTING IN PRACTICE
//Creation of the Variable Object

// *****************************************************************************************
//FUNCTION HOISTING

//FUNCTION DECLARATION
//How we've been doing it previously
//Declare the function
function calculateAge(year) {
	console.log(2020 - year);
}

//Call the function
calculateAge(1980);

//This is the most important point about hoisting
//Calling the function before we declare it - This is Hoisting - ONLY FOR FUNCTION DECLARATIONS
//Call the function
calculateAge(1970);

//Declare the function
function calculateAge(year) {
	console.log(2020 - year);
}

// *****************************************************************************************
//HOISTING DOES NOT WORK FOR FUNCTION EXPRESSIONS
//How we've been doing it previously

//Function Expression
let retirement = function(year) {
	console.log(65 - (2020 - year));
};

// Call the function
retirement(1990);

//Calling the function before we declare it - This is Hoisting - ONLY FOR FUNCTION DECLARATIONS
//Call the function

// Call the function
retirement(1985);

//Function Expression
let retirement = function(year) {
	console.log(65 - (2020 - year));
};

//THIS RETURNS AN ERROR

// *****************************************************************************************
//VARIABLES HOISTING

//Creating a variable - as we've done before
let age = 23;
console.log(age);

//What happens if we declare this variable before we use it in our code?
console.log(age);
var age = 23;
//Undefined is returned as during the creation phase the code is searched for variations and these are set to undefined.

function foo() {
	var age = 65;
	console.log(age);
	//returns the age of 65 because the age variable is defined in the variable objecct of the execution context object of the foo function
}

foo();
console.log(age);
//returns an age of 23 because thi foo function gets its own execution context object in which an age variable is stored
// The same name can be used because they have two different variables
// This age variable is defined in the variable object of the global execution context object

// *****************************************************************************************
//SCOPING AND THE SCOPE CHAIN
//Creation of the scoping chain

//Scoping answers the question "where can we access a certain variable?"
// In JS each function creates a scope which is a space/environment in which the variables that it defines are accessible.

// The only way a new scope is created is to write a new function

// Lexical scoping means a function that is lexically within another function gets access to the scope of the outer/parent function
// Therefore, it also has access to the functions and variables that the parent function defines.

//Example
//This is the Global scope - accessible from all funtions, it is the default scope
//In this scope we have access to the variable a and also the first function
//The global scope will never have access to varaibles b and c, in other words, locally scoped variables are not visible to their parent scopes
var a = "Hello!";
first();

function first() {
	//Variable b is in the scope of the first function; first () scope, it is local not global. But, it does have access to all the variables and functions defined in its parent scope/ the global scope
	//In this scope we have access to the variable b and also the second function
	var b = "Hi!";
	second();

	function second() {
		//Variable c is in the scope of the second function; second () scope, it is local not global. But, it does have access to all the variables and functions defined in its parent scope/ the global scope
		//In this scope we have access to the variable c but looks for the other variables in its parent scopes - This is called the scope chain
		//Only is the JS engine does not find one of the variables will is through an error and stop the execution
		var c = "Hey!";
		console.log(a + b + c);
	}
}

// Example to show that the execution stack is different to the scoping chain
// The execution stack is the order in which functions are called
// The scope chain is the order in which functions are written in the code
// Therefore, the order in which the functions are called does not determine the scope of the variables within these functions

// The scope chain for each execution context is stored in the execution context object
// The execution stack is DIFFERENT to the scope chain

// In the example below
// The first funtion is called, then the second, then the third.
// For each of these call a new execution context is put on top of the execution stack

// In the example below
// The Global scope contains the a variable and the first and third functions
// The scope of the first function contains the second function

//The Global scope
var a = "Hello!";
first();

//The first function is in the global scope
function first() {
	var b = "Hi!";
	second();

	//Because of the scope chain the second function has the ability to call the third funtion
	function second() {
		var c = "Hey!";
		third();
	}
}

//The third function is in the global scope
function third() {
	var d = "John";
	console.log(c);
}

//This all throws an error because although the scope chain allows the second function to call the third funtion
//The execution stack and the scope chain are not the same thing

//Therefore what can access the c variable?
//As the third function is in a different scope to the second function it cannot access variable c
//The third function can only access a and d because these are the only variables in the scope chain for the third function

// *****************************************************************************************
//THE 'THIS' KEYWORD
//Last step of the creation phase to determining and setting the value of the "this" variable/keyword

//The this variable is a variable that each and every execution contexts gets - It is stored in the execution object context.

//In a regular function call the "this" keyword points at the global object (The window object int he browser) This is the default.
//In a method call the "this" keyword points to the object that is calling the method
//IMPORTANT - The "this" keyword is not assigned a value until a function where it is defined is actually called.

//Example - this is a regular function call, not a method
// In a regular function call the this keyword always points to the window object
// This is because the object that this function is attached to is the global object

calculateAge(1975);

function calculateAge(year) {
	console.log(2016 - year);
	console.log(this);
}

var John = {
	name: "John",
	yearOfBirth: 1990,
	calculateAge: function() {
		console.log(this);
		console.log(2020 - this.yearOfBirth);

		function innerFunction() {
			console.log(this);
		}
		innerFunction();
	}
};

John.calculateAge();
