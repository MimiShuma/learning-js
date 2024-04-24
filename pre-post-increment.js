// pre increment
let a = 5;
let b = ++a; // Increment 'a' first, then assign to 'b'
console.log(a); // Output: 6
console.log(b); // Output: 6

// post increment
let c = 5;
let d = c++; // Assign 'c' to 'd' first, then increment 'c'
console.log(c); // Output: 6
console.log(d); // Output: 5

// multiple pre increment
let e = 5;
let f = ++e + ++e; // Increment 'e' twice, then edd
console.log(e); // Output: 7
console.log(f); // Output: 13 (6 + 7)

// multiple post increment
let g = 5;
let h = g++ + g++; // Add 'g' twice, then increment
console.log(g); // Output: 7
console.log(h); // Output: 11 (5 + 6)

// pre and post increment
let i = 5;
let j = ++i + i++; // Increment 'i' once, then add, then increment again
console.log(i); // Output: 7
console.log(j); // Output: 12 (6 + 6)
