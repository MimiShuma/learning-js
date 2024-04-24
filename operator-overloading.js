// Operator overloading in JavaScript refers to the ability to define custom behaviors for operators, 
// such as `+`, `-`, `*`, etc., when applied to custom objects. However, unlike some other languages, 
// JavaScript does not directly support traditional operator overloading where you can redefine how operators 
// work with built-in types like numbers and strings. Instead, you can define methods for custom objects that 
// allow them to work with operators in a way that makes sense for your specific use case.

// Define a custom object constructor
function MyNumber(value) {
    this.value = value;
}

// Define a method to add two instances of MyNumber
MyNumber.prototype.add = function (otherNumber) {
    return new MyNumber(this.value + otherNumber.value);
};

// Create two instances of MyNumber
let num1 = new MyNumber(5);
let num2 = new MyNumber(3);

// Perform addition using the custom method
let sum = num1.add(num2);

// Output the result
console.log("Sum:", sum.value); // Output: Sum: 8
