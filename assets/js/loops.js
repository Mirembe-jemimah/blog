/*
for (counter, condition, expression) {//code goes 
}
*/

//elevator going down
for(let floor=3; floor>1; floor--){
    console.log('going down');
    if(floor==1){
        console.log('youve arrived at your destnation')//doesnt run because the for loop ended

    }
}

for(let num=0; num<=10; num++){
    console.log("Hi there")
}

//while loop
const REQUIRED_AGE = 18;
let currentAgee = 2;

while(currentAgee < REQUIRED_AGE){
    console.log("You are under age");
    currentAgee+=1;
}

//do while loop
let numb=0;
do {
    numb++;
    console.log("Hi there number ", numb)
    
} while (numb < 10);


//for each
//for(of)

/* array
let sumArray = [];
*/
let fruits = ["pears", "jack Fruit", "Apples", "Grapes","Bananas","Mangoes"];

//total number of items
//arrsy.length
let lastItem = fruits[fruits.length-1]
console.log("lastItem is ", lastItem);
fruits.push("Berries")
lastItem = fruits[fruits.length-1]
console.log("lastItem is ", lastItem);
fruits.push("Lemons")
lastItem = fruits[fruits.length-1]
console.log("lastItem is ", lastItem);

let numSet1 = [1,2,3,4,5];
let numSet2 = [6,7,8,9,10];
//approach 1
let numbers = numSet1 + numSet2;
//approch 2
let numbers2 = numSet1.concat(numSet2);

console.log("appr1", numbers);
console.log("appr2", numbers2);
console.log(numbers === numbers2)

//loop over array
for(let item =0; item<fruits.length; item++){
  console.log("Fruits: ", fruits[item])
}
//approach 2
 fruits.forEach(function(fruits){
  console.log("FR: ",fruits)
    
 })

 //elevator going up in a building
 
function Elevator(up){
    for (let floor=1; floor<=4; floor++){
        console.log("Going Up");
        if (floor==4){
            console.log("you have reached floor 4");
        }   
    }
return up;
}
    
Elevator ()

