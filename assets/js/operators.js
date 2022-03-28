//commonly used operators in js

//assignment operators
let currentAge = 20;
let ageIn5yrs = (currentAge+5); //option 1
// ageIn5yrs += // get the value of agein5yrs and add something
//ageIn5yrs += (currentAge+5);
//console.log(ageIn5yrs)

let age = 1;
// age += same as below
age= age + 5;

let ageInHalf = ageIn5yrs / 2;
let num = 2;
num /= ageInHalf;
//console.log('num>>>',num)

num*= 5;
console.log('>>>>>>>', num)

let age2YrsAgo = (num - 2);

//modulo operator
let remainder = age2YrsAgo % 3; //returns the remainder after division

// logical operators 
let truth = true && true;
let lie = true && false;
let lie2 = lie || truth; 
let lieIsh = truth && lie;

// comparison operators
let num1, num2;
// let numOne, numTwo; // camelCase js
//let num_three = 3; // snake_case usually used in python
num1 = 55;
num2 = 78;
let isEqual = (num1 == num2);
let isGreater = (num2 > num1);
let isGreaterOrEqual = num1 >= num2;
let isLessOrEqual = (num1 <= num2);

let notEqual = num1 != num2;
let notEqualStirct = num1 !== num2;
 