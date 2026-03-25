// a callback function is a function that is passed as an argument to another function * and is executed after some 
// operation has been completed. It allows us to handle asynchronous operations and ensures that certain code runs 
// only after a specific task is finished.

function calculator(num1, num2, func) { //func is the argument that is passed to the calculator function.
                           //  It is expected to be a function that will be called within the calculator function.
    return func(num1, num2); // This line calls the func function, passing num1 and num2 as arguments.
}
//a high order function takes in another function as an argument or returns a function as a result. 
// It allows us to create more flexible and reusable code by abstracting away common patterns of behavior.

function addition(num1, num2) {
    console.log("addition", num1 + num2);
}
function subtraction(num1, num2) {
    console.log("subtraction", num1 - num2);
}

calculator(10, 5,addition); //addition is the identifier this is you invoking the calculator 
                     // function and passing the addition function as an argument.
calculator(10, 5, subtraction); //subtraction is the identifier this is you invoking the calculator      
 

let names = ["Gloria", "John", "Jane", "Doe"];
names.forEach(function(name) { //forEach is a method that iterates over each element in the 
                              // names array and executes the provided function for each element.
    console.log(name); // This line logs the current name to the console.
}); 

          //OBJECTS are a collection of properties, where each property is defined as a key-value pair.

let person = {
    name: "Gloria",
    age: 30,
}
console.log(person);
for (let key in person) { // This line starts a for...in loop that iterates over the keys of the person object.
    console.log(key); // This line logs the current key to the console.
    console.log(person[key]); // This line logs the value associated with the current key to the console.
}