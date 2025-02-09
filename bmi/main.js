const weight = Number(prompt("Please enter your weight in kilograms:"));
const height = Number(prompt("Please enter your height in centimeter:"));
const bmi = weight / ((height / 100) ** 2);
console.log(bmi);

