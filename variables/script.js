// OLD JAVASCRIPT

var names = ["John", "Lusia", "Maria"];

var counter = 10;

counter = 5;

console.log(counter); // result --> 5

// ----------******-------- //

var number = 5;

function sayName() {
  var name = "John"; // you cannot use the name variable outside the function;

  console.log(name);
}

sayName();

//----- ES6 ----- //

// there are two type of variables let and const

let list = [1, 2, 3, 4, 5];

for (let i = 0; i < list.length; i++) {
  console.log(i); // i available only enside the loop
}
