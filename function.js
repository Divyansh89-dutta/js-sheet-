//question-36
function greet(){
    var name = prompt("Please enter your name: ");
    console.log("Hello, " + name + "!Welcome!");
}
greet();
//question-37
function square(){
    var number = parseFloat(prompt("Please enter a number:"));
    var result = number * number;
    console.log("The square of " + number + " is " + result);
    return result;
}
square();
//question-38
function even(){
    var number = parseInt(prompt("Please enter an integers: "));
    var result = (number % 2 === 0);
    console.log("Is the number " + number + " even? " + result);
    return result;
}
even();
//question-39
function down(){
    var number = parseInt(prompt("Please enter an integers: "));
    if (number > 0){
        for(var i = number; i>= 1; i--){
            console.log(i);
        }
    }else{
        console.log("Please enter a positive number");
    }
}
down();
