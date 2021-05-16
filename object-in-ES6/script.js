// OLD JAVASCRIPT

function getBook(title, author) {
  return {
    title: title,
    author: author,
  };
}

var book = getBook("Elon Musk", "Dans");
console.log(book);
/* result {
    title: Elon Musk,
    author: Dans 
}
*/

// ES6

function getBook(title, author) {
  return {
    title,
    author,
  };
}

var book = getBook("Elon Musk", "Dans");
console.log(book);

// ************************************** //
// ES6
const list = {
  name: "Jack",
  country: "China",
};
const { name, country } = list;

console.log(name); // result --> Jack;
