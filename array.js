//question-40
var fruits = ['apple', 'banana', 'orange'];

fruits.forEach(fruit => console.log(fruit));
//question-41
var fruits = ["mango","apple","banana"];
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
//question-42
var num = [];

for (let i = 1; i <= 10; i += 2) {
  num.push(i);
}

console.log(num);
//question-43
var num = [2,5,8,10,3];
var sum = 0;
for(var i = 0; i<num.length;i++){
    sum += num[i];
}
console.log("The sum of all elements in the array is: ",+ sum);
//question-44
var color = ["Red","Green","White","Black"];
var join = color.join("+");
console.log(join);
//question-45
var number = [34,7,23,32,67,63];
if(number.length === 0){
  console.log("The array is empty: ");
}
else{
  var largestNumber = number[0];
  for(var i = 1 ; i< number.length;i++){
    if(number[i] > largestNumber){
      largestNumber = number[i];
    }
  }
}
console.log("The largest number in the array is: " + largestNumber);
//question-46
var arr1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];
arr1.sort(function(a, b) {
  return a - b;
});
console.log(arr1);
//question-47
function findMostFrequent(arr) {
  let frequency = {};
  let maxCount = 0;
  let mostFrequentItem;

  for (let i = 0; i < arr.length; i++) {
      let item = arr[i];
      if (frequency[item] == null) {
          frequency[item] = 1;
      } else {
          frequency[item]++;
      }
      if (frequency[item] > maxCount) {
          maxCount = frequency[item];
          mostFrequentItem = item;
      }
  }

  return `${mostFrequentItem} (${maxCount} times)`;
}
var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
let result = findMostFrequent(arr1);
console.log(result);
//question-48
function squareArray(arr) {
  let squaredArray = [];
  for (let i = 0; i < arr.length; i++) {
      squaredArray.push(arr[i] * arr[i]);
  }
  return squaredArray;
}
let input = prompt("Please enter a list of numbers separated by commas:");
let numberArray = input.split(",").map(Number);
let squaredArray = squareArray(numberArray);
console.log("The squared array is: " + squaredArray.join(","));
//question-49
function capitalizeWords(words) {
  return words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
}
var wordsArray = ["hello", "world", "javascript", "is", "fun"];
var capitalizedArray = capitalizeWords(wordsArray);
console.log(capitalizedArray);
//question-50
function add(words, prefix){
  return words.map(word => prefix + word);
}
var namesArray = ["john","jane","doe"];
var prefix = "Mr.";
var prefixedArray = add(namesArray, prefix);
console.log(prefixedArray);
//question-51
function convertCelsiusToFahrenheit(temperature){
  return temperature.map(temp => (temp * 9/5) + 32);
}

var celsius = [0, 20, 30, 100];
var fahrenheit = convertCelsiusToFahrenheit(celsius);
console.log(fahrenheit);

//question-52
function filterPosstiveNumber(number){
  return number.filter(number => number > 0);
}
var mixedNumbers = [-10,-5,0,5,10,15];
var positiveNumber = filterPosstiveNumber(mixedNumbers);
console.log(positiveNumber);
//question-53
function filterEvenNumber(number){
  return number.filter(number => number % 2 === 0);
}
var number = [1,2,3,4,5,6,7,8,9,10];
var evennumber = filterEvenNumber(number);
console.log();
//question-54
function filterWordsWithMoreThanFiveChara(words){
  return words.filter(word => word.length > 5);
}
var wordsArray = ["apple" , "banana", "orange","grape","watermelon","kivi"];
var filteredWorlds = filterWordsWithMoreThanFiveChara(wordsArray)
console.log(filteredWorlds);
//question-55
function reverseArray(arr) {
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
   
    let temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
  return arr;
}

let array = [1, 2, 3, 4, 5];
let reversedArray = reverseArray(array);
console.log(reversedArray); 
