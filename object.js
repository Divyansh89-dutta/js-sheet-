//question-56
var person = {
    name: "Divyansh",
    age:"18",
    city:"Bhopal"
}
console.log("Name:",person.name);
console.log("Age:",person.age);
console.log("City:",person.city);
//question-57
var person = {
    name: "Sakshi",
    age:"19",
    city:"Bhopal"
}
person.occupation = "Software Developer";

console.log(person);

//{name: "Divaynsh",age: "18",city: "Bhopal",occupation: "Software Developer"}

//question-58

var calculator = {
    add: function(a,b) {
        return a + b;
    },
    subtract: function(a,b) {
        return a - b;
        },
        multiply: function(a,b) {
            return a * b;
            },
            divide: function(a,b) {
                return a / b;
                },
                square: function(a) {
                    return a * a;
                    },
                    cube: function(a) {
                        return a * a * a;
                        }
}

var sum = calculator.add(10,5);
var diff = calculator.subtract(10,5);
var product = calculator.multiply(10,5);
var quotient = calculator.divide(10,5);
var square = calculator.square(10);
var cube = calculator.cube(10);

console.log("Sum:",sum);
console.log("Difference:", diff);
console.log("Product:",product);
console.log("Quotient:",quotient);
console.log("Square:",square);
console.log("Cube:",cube);