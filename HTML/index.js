// console.log(a);
// Hoisting
// Global scope
// var a = 10;
// console.log(a);
// console.log(b);
// Error: Reference Error
// es6 let and const
// Block scope
// console.log(b);
// TDZ temporal dead zone
// let b = 20;
// b = 90;
// console.log(b);

// {
//   var a = 40;
//   console.log(a);
//   let b = 90;
//   console.log(b);
// }
// console.log(a);
// console.log(b);

// const c = 23;
// TypeError
// c = 89;
// console.log(c);

// // Functions ANd type
// // 1. Named Function
// // Step 1 : Creation
// function fnName() {
//   console.log("Hello World 1");
//   console.log("Hello World 2");
//   console.log("Hello World 3");
//   console.log("Hello World 4");
// }

// // step 2: Invokation
// fnName();

// // 2. Function Expression
// let a = function () {
//   console.log("Function Expression");
// };

// a();

// // 3. Arrow Function(ES6)

// let b = () => {
//   console.log("Arrow Function");
//   console.log("In JS");
// };

// b();

// // 4. Callback Function 5. IIFE (Immediately invoked function Expression)

// (() => {
//   console.log("IIFE and Callback Function Together");
// })();

let addTwoNo = (parameter1, parameter2) => {
  console.log(parameter1 + parameter2);
};

addTwoNo(23, 45);
addTwoNo(34, 89);
addTwoNo(67, 90);

// Conditional Statements
// if
let marks = 45;
// if (marks < 70) {
//   console.log("Got fail");
// }

// If Else
// if (marks < 70) {
//   console.log("Got fail");
// } else {
//   console.log("Got Pass");
// }

//else if
// if (marks > 90) {
//   console.log("passed with good marks");
// } else if (marks > 70 && marks < 90) {
//   console.log("passed with 1st rank");
// } else if (marks > 50 && marks < 70) {
//   console.log("Passed with second rank");
// } else {
//   console.log("Got Fail");
// }
// let b = true;
// let c = false;

// // and
// if (b && c) {
//   console.log("it will run only when both the conditions are true");
// }

// // Or
// if (b || c) {
//   console.log("it will run if any condition is true");
// }
// // not
// if (!b) {
//   console.log("it's fal;se");
// }

// let a = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(a);
// console.log(a[2]);
// console.log(a.length);

// // loops
// // intialization;condition;inc/dec
// for (let i = 0; i < a.length; i++) {
//   console.log(i, a[i]);
// }

// let arr = [1, 2, 3, 4, 5];
// console.log(arr);
// console.log(arr[6][0]);
// arr.push("hi");
// arr.push("hi343");
// arr.unshift(89);
// // arr.unshift("sdghf");

// console.log(arr);
// arr.pop();
// arr.shift();
// console.log(arr);
// // arr[3] = "erere";
// console.log(arr);
// console.log(arr.length);

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
//   arr[i] = arr[i] * 2;
// }
// console.log(arr);
// let arr1 = [1, 2, 3, 4, 5];
// let b = arr1.map((el, i) => {
//   console.log("Array values", el, "and their index is ", i);
//   return (el = el * 2);
// });
// console.log(arr1);
// console.log(b);

// let c = arr1.filter((element, index) => {
//   console.log(element, index);

//   return element % 2 == 1;
// });
// console.log(arr1);
// console.log(c);

// let d = arr1.reduce((acc, elem, ind) => {
//   return (acc = acc + elem);
// }, 0);
// console.log(d);

// object
// let a = {
//   as: "wer",
//   we: 12,
//   io: 90,
//   op: [1, 2, 3, 4],
// };

// console.log(a);
// console.log(a.op);
// console.log(a["as"]);

// a.age = 45;
// a.op = 23;
// console.log(a);
// delete a.op;
// console.log(a);

// console.log(Object.keys(a));
// console.log(Object.values(a));
// let b = [12, 3, 4, 5, 6];
// let c = [12, 3, 4, 5, 6];

// console.log(b[0] == c[0]);
// console.log(2 === "2");
// console.log(1 + "23");
// console.log(1 - "23");
let a = [
  {
    name: "sid",
    age: "23",
  },
  {
    name: "Rahul",
    age: "23",
  },
];
a.map((el) => {
  console.log(el.name);
});
