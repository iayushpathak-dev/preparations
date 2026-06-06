// Summary
// 1. var, let and const
// 2. Temporal dead zone
// 3. Shadowing (the leagal way)
// 4. Illegal Shadowing (the illegal way)

// Question 1: The Magic Box (Scope & Reassignment)

const user = "Amit";

if (true) {
  let user = "Rahul";
  user = "Vikram";
  console.log("Inside:", user);
}

console.log("Outside:", user);

// Question 2: The Sneaky var (Shadowing)

var speed = 60;
if (true) {
  var speed = 100;
  console.log("Inside:", speed);
}
console.log("Outside:", speed);

// Question 3: The Sci-Fi Zone (TDZ Mechanics)

console.log(a);
// console.log(b);

var a = 5;
let b = 10;

// ReferenceError: Cannot access 'b' before initialization  Temporal dead zone for b variable.

// Question 4: The Boundary Break (Illegal Shadowing)

var total = 500;
if (true) {
  var total = 1000;
  console.log(total);
}

// SyntaxError: Identifier 'total' has already been declared

// Question 5: Write code demonstrating variable shadowing and why var can be re-declared but let cannot.

let x = 20;

if(true){

    let x = 1000;
    console.log(x);
}
console.log(x)