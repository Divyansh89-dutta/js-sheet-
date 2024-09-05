//*BASIC INPUT OUTPUT*
//question-1
var user = ("Ram"); console.log(user);
//question-2
var num1 = 10;
var num2 = 2;
//  Addition
var sum = num1+num2;
console.log("Sum:-",sum);
// Subtraction
var diff = num1-num2;
console.log("Difference:-",diff);
// Multiplication
var prod = num1 * num2;
console.log("Product:-",prod);
// Division
var quot = num1/num2;
console.log("Quotent:-",quot);
//question-3
var side1 = 5;
var side2 = 6;
var side3 = 7;
var s = (side1+side2+side3)/2;
var area = (s*(s-side1) * (s - side2) * (s - side3)); 
console.log("Area of The triangle:",area);
//question-4
var num1 = 5;
var num2 = 5;
function triple(a,b){
    var sum = a+b;
    if(a===b){
        sum *= 3;
    }
    return sum;
}
var result = triple(num1,num2);
console.log("Result:",result);
//question-5
var number = prompt("Enter a Number");
console.log("Number entered by the user:",number);
//question-6
var name = prompt("What is your name?");
console.log("Hello " + name +"!" );
//question-7
var num1 = parseInt(prompt("Enter the first integer:"));
var num2 = parseInt(prompt("Enter the sceond integer:"));
var sum = num1+num2;
console.log("The sum of:" +num1 + "&" + num2 + "=" +sum);
//question-8
var name = prompt("Enter your name: ");
var age = parseInt(prompt("Enter you age: "));
console.log("hello" + name + ", you are "+ age + " years old.");