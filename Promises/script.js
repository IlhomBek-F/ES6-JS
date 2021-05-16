// -----------> OLD JAVASCRIPT <----------- \\

function getData(data, callBack) {
  setTimeout(() => {
    console.log("reading  data from data base");
    callBack({ data: data });
  }, 2000);
}

getData(5, function (data) {
  console.log(data);
});

// -----------> ES6 <------------- \\

const prom = new Promise((resolve, reject) => {
  let user = prompt("Your ID...");
  setTimeout(() => {
    if (user === 200) {
      resolve("Hello Ilhomjon");
    } else {
      reject("Wrong ID?");
    }
  }, 4000);
});

prom
  .then((data) => {
    console.log(data);
  })
  .catch((err) => alert(err));
