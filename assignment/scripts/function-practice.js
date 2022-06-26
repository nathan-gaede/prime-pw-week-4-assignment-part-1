console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());
hello()
console.log(hello())

// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
/**
 * 
 * @param {*} string//choose any name as a string
 * @returns {*} string//returns console log 'Hello' "name"
 */

function helloName( name ) { 
  
  return console.log('Hello',name);
  
}
(helloName('Fred'))





// Remember to call the function to test
/**
 * 
 * @param {*} firstNumber 
 * @param {*} secondNumber 
 * @returns //the sum of the firstNumber and secondNumber
 */

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber,secondNumber ) {
  // return firstNumber + secondNumber;
let sum = firstNumber + secondNumber;
return console.log(sum)
}
addNumbers(1,2)
addNumbers(-23,45)
addNumbers(-23,-88)


/**
 * 
 * @param {*} firstNumber 
 * @param {*} secondNumber 
 * @param {*} thirdNumber 
 * @returns //product of multiplying firstNumber by secondNumber by thirdNumber 
 */
// 4. Function to multiply three numbers & return the result
function multiplyThree( firstNumber,secondNumber,thirdNumber ){
let product = firstNumber * secondNumber * thirdNumber;
return console.log(product)
}
multiplyThree(2,3,4)
multiplyThree(3,-9,8)
multiplyThree(1.6,3.5,99.7)
//testing if there is a conflict in using the same variable names in two different functions.
addNumbers(4,7)
addNumbers(-9,17)

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return;
  }
    return;
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast( array ) {

}

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find( value, array ){
  
}

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {

}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll( ) {
  let sum = 0
  // TODO: loop to add items
  return sum;
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.



// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
