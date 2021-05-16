// ES6

const shoppingList = ["Milk", "Cow", "Eggs", "Bananas", "Choco"];

// forEach
// return does not work in forEach function
shoppingList.forEach(product, (index) => {
  console.log(`This index is ${index} and the project is ${product}`);
});

// Map

const phrases = ["Look after", "go over", "tell off", "break down"];

const showPhrase = phrases.map((item) => {
  return item;
});

console.log(showPhrase);

// filter

const phrasesFilter = ["Look after", "go over", "tell off", "break down"];

const filterList = phrasesFilter.filter((item) => {
  return item === "Look after";
});

console.log(filterList); // result ["Look after"]
