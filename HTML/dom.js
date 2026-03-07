// // 1. Tag selector
// // let heading1 = document.getElementsByTagName("h1");
// // // HTMlCollection type of array
// // console.log(heading1[1]);

// // // 2. class selector
// // let aVar = document.getElementsByClassName("a");
// // // HTMlCollection type of array

// // console.log(aVar[0]);

// // // Id Selector

// // let bVal = document.getElementById("b");
// // // It will return first single value
// // console.log(bVal);

// // // 4. Query Selector (tag, class /id)
// // let queryVal = document.querySelector("#b");
// // // Return only first matching Value
// // console.log(queryVal);

// // // 5.querySlectorAll
// // let queryAllVal = document.querySelectorAll("h1");
// // // return nodeList Array
// // console.log(queryAllVal);

// // Class operations
// // Add / remove / toggle
// let newVar = document.querySelectorAll(".a");
// let aa = document.querySelector("p");
// newVar[1].classList.add("sd");
// console.log(aa);

// // remove
// // newVar[1].classList.remove("sd");

// // toggle
// newVar[1].classList.toggle("hide");

// // read and write operation
// console.log(aa.textContent);
// aa.textContent = "Written by JS";

// // Style ELements
// aa.style.backgroundColor = "red";
// aa.style.color = "White";

// // Create Element
// let heading3 = document.createElement("h3"); //<h3></h3>
// heading3.textContent = "Created and added content by js"; //<h3>Created and added content by js</h3>

// document.body.appendChild(heading3);

// let arr = ["Yash", "Siddharth", "rahul", "Adarsh", "Satyan"];
// let list = document.createElement("ul");
// // let li1 = document.createElement("li");
// // li1.textContent = arr[0];
// // let li2 = document.createElement("li");
// // li2.textContent = arr[1];
// // let li3 = document.createElement("li");
// // li3.textContent = arr[2];
// // let li4 = document.createElement("li");
// // li4.textContent = arr[3];
// // list.appendChild(li1);
// // list.appendChild(li2);
// // list.appendChild(li3);
// // list.appendChild(li4);

// for (let i = 0; i < arr.length; i++) {
//   let li = document.createElement("li");
//   li.textContent = arr[i];
//   list.appendChild(li);
// }

// document.body.appendChild(list);

// // Event Listeners;
// let btn = document.querySelector("button");
// let inpt = document.querySelector("input");
// btn.addEventListener("click", () => {
//   aa.classList.toggle("hide");
//   if (inpt.value == "2") {
//     list.classList.add("hide");
//   } else {
//     list.classList.remove("hide");
//     list.classList.add("sd");
//   }
// });

//  Asynchrous Programming

setTimeout(() => {
  console.log("Async Progrraming");
}, 0);
// callback Function
// Timer

// callback hell
// Nested callback functions
// identify: pyramid structure
// setTimeout(() => {
//   console.log("Callback Function 1");
//   setTimeout(() => {
//     console.log("Callback Function 2");
//     setTimeout(() => {
//       console.log("Callback Function 3");
//       setTimeout(() => {
//         console.log("Callback Function 4");
//       }, 2000);
//     }, 2000);
//   }, 2000);
// }, 2000);

// promises
// 3 states
// pending
// Fulfilled
// Rejected

let myPromise = new Promise((resolve, reject) => {
  let marks = 55;
  if (marks > 70) {
    resolve("Now My Father will give me a treat in taj");
  } else {
    reject("Now i will get maar");
  }
});

// .then and .catch
// error handling
// Chaining Process
myPromise
  .then((r) => {
    console.log(r);
  })
  .catch((err) => {
    console.log(err);
  });

// async and await
// we have to write async keyword in the begining before function
// no inbuilt error handling
// for resolve cases we are going to use try block
// For error cases we are going to use catch block

let myPromisePrinter = async () => {
  try {
    let res = await myPromise;
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};

myPromisePrinter();

// How to fetcgh an api
const apiHandler = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    console.log(res);
    const data = await res.json();
    console.log(data);
    const table = document.querySelector("tbody");
    // const tr = document.createElement("tr");
    // tr.innerHTML = `<td>${data[0].id}</td><td>${data[0].name}</td><td>${data[0].email}</td><td>${data[0].username}</td>`;
    // table.appendChild(tr);
    data.forEach((el) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `<td>${el.id}</td><td>${el.name}</td><td>${el.email}</td><td>${el.username}</td>`;
      table.appendChild(tr);
    });
  } catch (err) {
    console.log(err);
  }
};

apiHandler();

let a = 10;
console.log(a);
