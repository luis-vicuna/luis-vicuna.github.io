// Part A

const mass1=78;
const height1=1.69;

const mass2=92;
const height2=1.95;

function BMI(mass,height){
    const result = mass/(height*height);
    return result;
}

const PetterBMI = BMI(mass1,height1);
const LucasBMI = BMI(mass2,height2);
const lucasHigherBMI = PetterBMI>LucasBMI;

console.log(`The BMI of Petter is ${PetterBMI}, The BMI of Lucas is ${LucasBMI}, Petter's BMI is higher than Lucas's BMI that is ${lucasHigherBMI}`);

// Part B
const celsius = 29;

const convfahren= celsius*9/5 +32;

const fahrenheit = 75;

const convcel= ((fahrenheit-32) * 5)/9;

console.log(`${celsius}C is ${convfahren}F `);
console.log(`${fahrenheit}F is ${convcel}C `);

// Part C
if(LucasBMI>PetterBMI){
    console.log(`Lucas' BMI(${LucasBMI}) is higher than Petter's (${PetterBMI})`);

}else{
    console.log(`Petter's (${PetterBMI}) is higher than Lucas' BMI(${LucasBMI})`);
}

// Part D

function CovertCelsiusToFahrenheit(value1){
    const result = value1*9/5 +32;
    console.log(`${value1}C is ${result}F` );
}

function CovertFahrenheitToCelsius(value1){
    const result = ((value1-32) * 5)/9;
    console.log(`${value1}F is ${result}C` );
}

CovertCelsiusToFahrenheit(100);
CovertCelsiusToFahrenheit(0);
CovertCelsiusToFahrenheit(10);
CovertFahrenheitToCelsius(32);
CovertFahrenheitToCelsius(10);
CovertFahrenheitToCelsius(102);