function checkAge(){
    let age = 15;
    if (age>= 16) {
        console.log("You may proceed and attend");
    } else {
        console.log("Sorry, we can't let you in.")
    }
}
checkAge() //calls, invokes, executes   

// functions that take in input
const MIN_AGE = 16;
function checkAgeV2(age){
    if(age <MIN_AGE){
        console.log("Welcome to th traine program")
    } else {
        console.log("You may proceed with the internship")
    }
} 

function checkAgeV3(age){
    if(typeof age == 'number' && age <= MIN_AGE){
        console.log("Welcome to th traine program")
    } else if(typeof age == 'number' && age > MIN_AGE){
        console.log("You may proceed with the internship")
    } else {
        console.log("Invalid data provided")
    }
}
// calling the parameter
checkAgeV2(12);
checkAgeV2(14);
checkAgeV2(27);
checkAgeV2("hello");
checkAgeV3(32); //valid
checkAgeV3("35"); //invalid
checkAgeV3("hello"); //invalid

function printNumber(num, fn){
    fn(num);
};

printNumber(22, checkAgeV3) //called the call back function

// anonymous functions /nameless
let sayName = function(name){
    console.log("my name is: ", name)
}
sayName("Jaymaimer");

// arrow functions
const sayNameV2 = () => console.log("Hy there girl!");
const sayNameV3 = (name) => {
      console.log("Hi there: ", name);
}

const addV2 = (a,b) => {
    return a+b;
}
