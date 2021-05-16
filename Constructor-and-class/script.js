// OLD JAVASCRIPT

function Person(name, age, eyecolor) {
  this.name = name;
  this.age = age;
  this.eyecolor = eyecolor;
}

var Jack = new Person("Jack", 22, "black");

console.log(Jack);

function Julia(occupation, hobbys, name, age, eyecolor) {
  Person.call(this, name, age, eyecolor);
  this.occupation = occupation;
  this.hobbys = hobbys;
}

var Julia = new Julia("management", "learning", "Julia", 21, "blue");

console.log(Julia);

//------------->> ES6 <<------------------\\

class ShoppingList {
  constructor(item, price) {
    this.item = item;
    this.price = price;
  }

  sayItem() {
    console.log(this.item);
  }
}

const MyList = new ShoppingList(["Milk, Meat, Sugar"], [2, 4, 5]);

console.log(MyList);

MyList.sayItem();

// ---------> another example <--------- \\

class Product extends ShoppingList {
  constructor(item, amount, country, price) {
    super(item, price);
    this.amount = amount;
    this.country = country;
  }
}
const item = prompt("Product item");
const amount = prompt("How many?");
const count = prompt("From Where?");
const price = prompt("How much is it?");

const product = new Product(item, amount, count, price);

console.log(product);
