//question-21
function Hello() {
    var n = parseInt(prompt("Enter the number of times you want to print 'Hello, world!':"));
    var count = 0;
    while (count < n) {
        console.log("Hello, world!");
        count++;
    }
}

Hello();

//question-22
function natural(){
    var n = parseInt(prompt("Enter the number of natural number you want to print: "));
    var number = 1;
    while(number <= n){
        console.log(number);
        number++;
    }
}
natural();
//question-23
function reverse(){
    var n = parseInt(prompt("Enter the starting number for reverse natural numbers:"));
    var i = n;
    while(i>=1){
        console.log(i);
        i--;
    }
}
reverse();
//question-24-25
function multiplication() {
    var num = parseInt(prompt("Enter the you want to multiply: "));
    var i = 1;
    while(i<=num){
        console.log(num+ "*"+i+"="+(num*i));
        i++;
    }
}
multiplication();
//question-26
function special() {
    var n = parseInt(prompt("Enter the number up to which you want to execute the special pattern:"));
    var i = 1;
    while (i <= n) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("Sheryians coding school");
        } else if (i % 3 === 0) {
            console.log("Sheryians");
        } else if (i % 5 === 0) {
            console.log("Coding");
        } else {
            console.log(i);
        }
        i++;
    }
}

special();

//question-27
function factorial(n){
    var n = parseInt(prompt("Enter the number to calculate its factorial: "));
    var result = 1;
    while(n>1){
        result *= n;
        n--;
    }
    return result;
}
console.log(factorial());
//question-28
function sum(){
    var start = parseInt(prompt("Enter the starting number of the range: "));
    var end = parseInt(prompt("Enter the ending number of the range: "));
    var even = 0;
    var odd = 0;
    var current = start;
    while(current<=end){
        if(current%2===0){
            even += current;
        }
        else{
            odd+=current;
        }
        current++ ;
    }
    console.log("Sum of even number in the rage:",even);
    console.log("Sum of odd number in the rage:",odd);
}
//question-29
function div(){
    var start = parseInt(prompt("Enter the sarting number of the rang: "));
    var end = parseInt(prompt("Enter the ending number of the rang: "));
    var current = start;
    while(current <= end){
        if(current % 3 === 0 || current % 5 === 0){
            console.log(current);
        }
        current++;
    }
}
div();
//question-30
function factor(){
    var number = parseInt(prompt("Enter a number to find its factors: "));
    var fact = 1;
    console.log("Factors of",number, "are: ");
    while(fact <= number){
        if(number % fact === 0){
            console.log(fact);
        }
        fact++;
    }
}
factor();
//question-31
function sum(){
    var num = parseInt(prompt("Enter a number to find the sum of its factors: "));
    var fact = 1;
    var sum = 0;
    console.log("Factors of", num,"are");
    while(factor <= number){
        if(number % fact === 0){
            sum += fact;
        }
        fact++;
    }
    console.log("sum of factors of", num, "is",sum);
}
//question-32
function perfect(){
    var num = parseInt(prompt("Enter a number to check if it is a perfect number: "));
    var sum = 0;
    var fact = 1;
    while (fact < num){
        if(number % fact === 0){
            sum += fact;
        }
        fact++;
    }
    if(sum === num){
        console.log(number, "is a perfect number");
    }
    else{
        console.log(number, "is not a perfect number");
    }
}
perfect();
//question-33
var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a string: ', (str) => {
  rl.question('Enter a number: ', (num) => {
    num = parseInt(num);
    if (isNaN(num)) {
      console.log("Invalid number. Please enter a valid number.");
      rl.close();
      return;
    }

    let result = '';
    for (let i = 0; i < num; i++) {
      result += str;
    }
    console.log(result);
    rl.close();
  });
});
//Question-34
var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a number: ', (number) => {
 
  var digits = number.toString().split('').map(Number);
  digits.forEach(digit => console.log(digit));

  rl.close();
});
//question-35
var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a number: ', (number) => {
  
  number = parseInt(number);
  if (isPrime(number)) {
    console.log(`${number} is a prime number.`);
  } else {
    console.log(`${number} is not a prime number.`);
  }

  rl.close();
});

function isPrime(num) {
  if (num <= 1) {
    return false;
  }
 
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
