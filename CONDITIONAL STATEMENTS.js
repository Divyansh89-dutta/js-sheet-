//question-9
var num1 = parseInt(prompt("Enter the first number: "));
var num2 = parseInt(prompt("Enter the second number: "));
if(num1 > num2){
    console.log("The greatest number is: "+num1);
}
else if(num2 >  num1){
    console.log("The gratest number is: "+num2);
}
else{
    console.log("Both number are equal:");
}
//question-10-11
var gender = prompt("Enter your gender: ");
if(gender === "M"){
    console.log("Good Morning Sir");
}
else if(gender === "F") {
    console.log("Good Morning Ma'am");
}
else{
    console.log("Worng Input");
}
//question-12
var number = parseInt(prompt("Enter the integer:"));
if(number % 2 === 0){
    console.log(number + " is an even number.");
}
else{
    console.log(number + "is an odd number");
}
//question-13
var name  = prompt("Enter your name:");
var age = parseInt(prompt("Enter your age:"));
if(age>=18){
    console.log("Hello" + name + ", you are a vaild voter.");
}
else {
    console.log("Sorry " + name +", you can't cast the voter.");
}
//question-14
var name = prompt("Enter your name: ");
var age = parseInt(prompt("Enter your age: "));
if(age >= 18){
    console.log("Hello" + name + ", you are a vaild voter.");
}
else{
    var year = 18-age;
    console.log("Sorry" + name + ", you can't cast the vote you have to wait for " + year + " Years");
}
//question-15
var num1 = parseInt(prompt("Enter the first interger: "));
var num2 = parseInt(prompt("Enter the second interger: "));
var num3 = parseInt(prompt("Enter the third interger: "));
if(num1 >= num2 && num1 >= num2){
    console.log("the largest number is: " +num1);
}
else if(num2 >= num1 && num2 >= num3){
    console.log("The largest number is: "+num2);
}
else{
    console.log("The largest number is: ",+num3);
}
// question-16
var units = parseInt(prompt("Enter the number of electricity units consumed:"));
var rate = 0;
if (units > 100) {
    rate = 10;
} else if (units > 50) {
    rate = 8;
} else {
    rate = 7;
}
var bill = units * rate;
console.log("Your electricity bill amount is: Rs. " + bill);

//question-17
var salary = parseInt(prompt("Enter your salary: "));
var tex = 0; 
if(salary > 130000){
    tex = (salary - 130000) * 0.3;
}
else if (salary > 70000){
    tex = (salary - 70000) * 0.2;
}
else if(salary > 50000){
    tex = (salary - 50000) * 0.1;
}
var amount = salary - tex;
console.log("Tax Amount: " + tex);
console.log("Amount left after paying tax: " + amount);

//question-18
var side1 = parseInt(prompt("Enter the lenght of the first side: "));
var side2 = parseInt(prompt("Enter the lenght of the second side: "));
var side3 = parseInt(prompt("Enter the lenght of the third side: "));

if (side1 + side2 > side3 && side2 + side3 > side1 && side1 + side3 > side2) {
    if (side1 === side2 && side2 === side3) {
        console.log("It forms an equilateral triangle.");
    }
   
    else if (side1 === side2 || side2 === side3 || side1 === side3) {
        console.log("It forms an isosceles triangle.");
    }
    else {
        console.log("It forms a scalene triangle.");
    }
} else {
    console.log("The given side lengths do not form a valid triangle.");
}
//question-19
var year = parseInt(prompt("Enter a year: "));
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(year + " is a leap year");
} else {
    console.log(year + " is not a leap year");
}

//question-20
var m = parseInt(prompt("Enter your marks: "));
if (m > 90) {
    console.log("A+");
} else if (m > 80 && m <= 90) {
    console.log("A");
} else if (m > 70 && m <= 80) {
    console.log("B+");
} else if (m > 60 && m <= 70) {
    console.log("B");
} else if (m > 45 && m <= 60) {
    console.log("C");
} else if (m > 33 && m <= 45) {
    console.log("D");
} else {
    console.log("F");
}
