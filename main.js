function something(username, age) {
  //theese are parameters
  console.log("happy birthday to you");
  console.log(`happy birthday to ${username}`);
  console.log(`you are ${age} years old`);
}
something("tanvir", 24); //inside values are arguments
something("spongebob", 34); //inside values are arguments
something("someOne", 3); //inside values are arguments

function add(a, b) {
  return a + b;
}

let ans = add(2, 3);
console.log(ans);

function isEven(number) {
  (number % 2 === 0) ?  console.log("Even Number") : console.log("Odd number");
}

isEven(24)

function validEmail(email) {
  return email.includes("@") ? true : false;
}

console.log(validEmail("leonmask.com"));
