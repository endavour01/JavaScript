// Discussing MEMORY in JavaScript'

// There are two types of memory in JavaScript
// 1. Stack Memory (primitives are stored in stack memory)
// 2. Heap Memory (Non-primitives are stored in heap memory)

// Stack Memory
let a = 10;
let b = a;
console.log(a);
console.log(b);
a = 20;
console.log(a);
console.log(b); // it will give 10 because b is a copy of a and they are stored in different memory locations in stack memory

// Heap Memory
let obj1 = {
    name: "Vikalp",
    age: 21,
    city: "Jaipur"
};
let obj2 = obj1;
console.log(obj1);
console.log(obj2); // it will give the same object because obj2 is a reference to obj1 and they are stored in the same memory location in heap memory
obj1.name = "Vik";
console.log(obj1);
console.log(obj2); // it will give the updated object because obj2 is a reference to obj1 and they are stored in the same memory location in heap memory