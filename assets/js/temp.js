//temperature gauge
const temp = 20;
let patient = {
    temperature: 67,
};

/* switch case
switch (patient.temperature){
    // conditions
    case patient.temperature >= temp &&  patient.temperature <= 36:
    console.log('Your temperature is normal')
    break;
    case patient.temperature >=37 && patient.temperature <= 40:
        console.log('Your temperature is above normal')
    break;
    case patient.temperature >= 40: 
        console.log('Your temperature is erratic')
    break;
    default:
    console.log('Please see a doctor immediately!')
*/ 

if(patient.temperature >= temp && patient.temperature <= 36){
    console.log('Your temperature is normal')
} else if(patient.temperature >= 37 && patient.temperature <=40){
    console.log('Your temperature is above normal')
    
} else if(patient.temperature >= 40){
    console.log('Your temperature is erratic, Please see a doctor immediately!')
}
else {
    console.log('The temperature is invalid')
}


