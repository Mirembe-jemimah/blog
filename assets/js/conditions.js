
//condition statements
/* if(expression){
    //code goes here
}
*/

const IG_MIN_AGE = 13;
let suzan = {
    age: 12,
};
// if statement
if(suzan.age >= IG_MIN_AGE){
    console.log('Congrats you can join instagram!')
}
// if else condition
if(suzan.age >= IG_MIN_AGE){
    console.log('Congrats you can join instagram!')
}
else {
    // runs if above condition isnt met
    console.log("sorry you can't watch reeks yet!")
}

// else if
if(suzan.age >= IG_MIN_AGE){
    console.log('Congrats you can join instagram!')
} else if(suzan.age == IG_MIN_AGE-1){
    //youre 12 yrs
    console.log('Just one more year and you post be patient')
} else if(suzan.age== IG_MIN_AGE-2){
    // message to 11 yr olds
    console.log('You have 2 yrs until you join, be patient')
}
else {
    console.log('Please concentrate on school for now')
}

// switch case
switch (suzan.age){
    // conditions
    case suzan.age >= IG_MIN_AGE:
    console.log('Congrats you can join instagram!')
    break;
    case suzan.age == IG_MIN_AGE-1:
        console.log('Just one more year and you post be patient')
    break;
    case suzan.age== IG_MIN_AGE-2:
        console.log('You have 2 yrs until you join, be patient')
    break;
    default:
    console.log('Please concentrate on school for now')
}


// send exit message for age 45-60
let oldiesAge = 45;
if (oldiesAge >= 45 && oldiesAge <=60){
    console.log('you should plan leaving instagram, boomer')
}
// ternary operator
let ageGroup = (suzan.age >= 18) ? "Adult": "Minor";