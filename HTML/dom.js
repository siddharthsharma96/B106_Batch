// 1. Tag selector
// let heading1 = document.getElementsByTagName("h1");
// // HTMlCollection type of array
// console.log(heading1[1]);

// // 2. class selector
// let aVar = document.getElementsByClassName("a");
// // HTMlCollection type of array

// console.log(aVar[0]);

// // Id Selector

// let bVal = document.getElementById("b");
// // It will return first single value
// console.log(bVal);

// // 4. Query Selector (tag, class /id)
// let queryVal = document.querySelector("#b");
// // Return only first matching Value
// console.log(queryVal);

// // 5.querySlectorAll
// let queryAllVal = document.querySelectorAll("h1");
// // return nodeList Array
// console.log(queryAllVal);

// Class operations
// Add / remove / toggle
let newVar = document.querySelectorAll(".a");
let aa = document.querySelector("p");
newVar[1].classList.add("sd");
console.log(aa);

// remove
// newVar[1].classList.remove("sd");

// toggle
newVar[1].classList.toggle("hide");

// read and write operation
console.log(aa.textContent);
aa.textContent = "Written by JS";

// Style ELements
aa.style.backgroundColor = "red";
aa.style.color = "White";

// Create Element
let heading3 = document.createElement("h3"); //<h3></h3>
heading3.textContent = "Created and added content by js"; //<h3>Created and added content by js</h3>

document.body.appendChild(heading3);

let arr = ["Yash", "Siddharth", "rahul", "Adarsh", "Satyan"];
let list = document.createElement("ul");
// let li1 = document.createElement("li");
// li1.textContent = arr[0];
// let li2 = document.createElement("li");
// li2.textContent = arr[1];
// let li3 = document.createElement("li");
// li3.textContent = arr[2];
// let li4 = document.createElement("li");
// li4.textContent = arr[3];
// list.appendChild(li1);
// list.appendChild(li2);
// list.appendChild(li3);
// list.appendChild(li4);

for (let i = 0; i < arr.length; i++) {
  let li = document.createElement("li");
  li.textContent = arr[i];
  list.appendChild(li);
}

document.body.appendChild(list);

// Event Listeners;
let btn = document.querySelector("button");
let inpt = document.querySelector("input");
btn.addEventListener("click", () => {
  aa.classList.toggle("hide");
  if (inpt.value == "2") {
    list.classList.add("hide");
  } else {
    list.classList.remove("hide");
    list.classList.add("sd");
  }
});
