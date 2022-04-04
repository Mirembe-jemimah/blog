 firstName = "";
 lastName = "Jaymaimer";
firstName = "Mirembe";

fullName = firstName + " " + lastName;
// fullName =  `${firstname} ${lastName}` called tilde
console.log(fullName)

lastName= "Jamie";
name = "jane";

// console.log(fullName.replace(/ /g, ""))
console.log(lastName.toLowerCase() == name.toLowerCase)


//  fullName = "".concat(firstName, "",lastName);
// console.log(fullName)

// object
//let person ={}
// let person = new object()

let codeQueenAddress = {
    town: "Ntinda",
    city: "Kampala",
    country: "Uganda",
    seatingCapacity: 10000,
    isAvailableForRent: true,
    building: "Ntinds Complex",
    office: "Innovation Village",
    657654: "some inform"
}

// get info out of object
let officeName = codeQueenAddress.office;
let town = codeQueenAddress.town;
let seatingCapacity = codeQueenAddress['seatingCapacity'];



// console.log(codeQueenAddress.office) //dot notation
// console.log('capacity', codeQueenAddress['seatingCapacity'])
// codequeenaddress[657654] square brackets 4 numbers

// assigning more properties
codeQueenAddress.isAvailable = true;

// changing the value of properties
codeQueenAddress.town = "Kamokya";
codeQueenAddress.office = "The Hive collab";
console.log('town >>>> ',town) 

console.log(codeQueenAddress)
let newOffice = Object.assign({},codeQueenAddress) //makes a detached copy f
// newOffice = codeQueenAddress // assign by reference
let altOffice = {...codeQueenAddress}
altOffice = {...altOffice, office: 'Nakawa', town: 'Nakawa'}

const person = {
    name: "jane",
    contact: {
        phone: "2567489789",
        email: "janedoe@server.com",
        ig: "instagram",
    }
    // access data within dot notation
}
