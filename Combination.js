//question-59
var book1 = {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    published: 1951
}
var book2 = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    published: 1925
}
var book3 = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    published: 1960
}

var books = [book1, book2, book3];

console.log(books);

//question-60

function printBooks(books) {
    books.forEach(function(book) {
        console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.published}`);
    });
}

var book1 = {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    published: 1951
}
var book2 = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    published: 1925
}
var book3 = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    published: 1960
}

var books = [book1, book2, book3];

printBooks(books);
//question-61

function filterEvenNumber(number){
    return number.filter(function(number){
        return number % 2 !== 0;
    });
}

var numbersArray = [1,2,3,4,5,6,7,8,9,10];
var oddNumbersArray = filterEvenNumber(numbersArray);

console.log(oddNumbersArray);
//question-62

function calculatorAverage(grades){
    var sum = grades.reduce(function(accumlator, grade){
        return accumlator + grade;
    }, 0);
    return sum / grades.length;
}

function evaluateStudents(students, passingThreshold){
    students.forEach(function(student){
        var averageGrade = calculatorAverage(student.grade);
        if(averageGrade >= passingThreshold){
            console.log(`Student ${student.name} passed with an average grade of ${averageGrade}`);
        }
        else{
            console.log(`Student ${student.name} failed with an average grade of ${averageGrade}`);
        }
    });
}

var student = [
    {name: "Sakshi", grade: [90, 80, 70, 60, 50]},
    {name: "Divya", grade: [80, 70, 60, 50, 40]},
    {name: "Divyansh", grade: [70, 75, 60 ,78, 50]}
]
var passingThreshold = 70;

evaluateStudents(student ,passingThreshold);

//question-63

function calculatorBMI(person){
    var heightInMeters = person.height/100;
    var BMI = person.weight / (heightInMeters * heightInMeters);
    return BMI;
}

var person = {
    height: 175,
    weight: 70
}

var BMI = calculatorBMI(person);
console.log("BMI", BMI.toFixed(2));

//question-64

function sortBooksByYear(books){
    return books.slice().sort(function(a,b){
        return a.year - b.year;
    });
}
 var books = [
    {title: "Harry Potter", author: "J.K. Rowling", year: 1997},
    {title: "The Lord of the Rings", author: "J.R.R. Tolkien", year: 1954},
    {title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937}
 ];

 var sortedBooks = sortBooksByYear(books);
 console.log(sortedBooks);

 //question-65

 var library = {
    books: [
        {title: "Harry Potter", author: "J.K. Rowling", year: 1997},
        {title: "The Lord of the Rings", author: "J.R.R. Tolkien", year: 1954},
        {title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937}
    ],
 
 borrowBook: function(title){
    var book = this.books.find(book => book.title === title && book.available);
    if (book) {
        book.available = false;
        console.log(`You have borrowed "${title}"`);
    }
    else {
        console.log(`"${title}" is not available!`);
        }
    },
    returnBook: function(title){
        var book = this.books.find(book => book.title === title && !book.available);
        if (book) {
            book.available = true;
            console.log(`You have returned "${title}"`);
        }
    }
}
console.log("Initial state of library:");
console.log(library.book);

console.log("\nBorrowing `1984`:");
library.borrowBook("1984");


console.log("\nState of library after borrowing:");
console.log(library.books);

console.log("\nReturning '1984':");
library.returnBook("1984");

console.log("\nState of library after returning:");
console.log(library.books);