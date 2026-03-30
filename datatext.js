//Types of Datatypes
 // ------------------------------------:Primitives:------------------------------------
//There are 7 datatypes in JavaScript
//1. String
//2. Number
//3. Boolean
//4. Null
//5. Undefined
//6. Symbol
//Example of Symbol
const id1 = Symbol("id");
const id2 = Symbol("id");
console.log(id1 === id2); // it will give false because each symbol is unique even if they have the same description
//7. BigInt

// ------------------------------------:Non-Primitives (Reference Type) :------------------------------------
// Arrays
//Example of Array
const arr = [1, 2, 3, 4, 5];
// Objects
//Example of Object
let info = {
    name: "Vikalp",
    age: 21,
    city: "Jaipur"
};
// Functions
//Example of Function
const myFunction = function(){
    console.log("Hello World");
}
myFunction(); // it will call the function and print "Hello World" in the console
console.log(typeof myFunction); // it will give "function" because functions are a special type of objects in JavaScript
