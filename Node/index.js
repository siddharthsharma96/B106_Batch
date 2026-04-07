// const fs = require("fs");
const http = require("http");

// blocking code
// synchronous code
// 1.Read file in a synchronous manner

// 1. file Path, 2.encryption
// const fsDataReadSync = fs.readFileSync("./txt/start.txt", "utf-8");
// console.log("The data that we have read \n", fsDataReadSync);

// console.log("hello");

// 2. Write file in a synchronous manner
// Arguments
// 1. file path, 2. data, 3. encryption method
// fs.writeFileSync(
//   "./txt/write.txt",
//   "This is the data that we have written in a synchronous manner",
//   "utf-8",
// );

// non-blocking code
// Asynchronous code
// 1. Read File in an asynchronous manner
// Arguments
// 1. file path, 2. encryption method, 3. callback function(err,data)
// fs.readFile("./txt/input.txt", "utf-8", (err, data) => {
//   if (err) {
//     return console.log("We are having some issue \n", err);
//   }
//   console.log("The data that we have read \n", data);
//   fs.readFile(`./txt/${data}.txt`, "utf-8", (err1, data1) => {
//     if (err1) {
//       return console.log("We are having some issue \n", err1);
//     }
//     console.log("The data that we have read \n", data1);
//   });
// });

// // 2. Write file in an asynchronous manner

// // arguments
// // 1. file path, 2. data, 3. encryption method, 4. callback function(err)
// fs.writeFile(
//   "./txt/final.txt",
//   "This is the data that we have written in an asynchronous manner",
//   "utf-8",
//   (err) => {
//     if (err) {
//       return console.log("We are having some issue \n", err);
//     }
//     console.log("File has been written successfully");
//   },
// );

// Http Status Codes
// 1xx-100-199 - informational response
// 2xx- 200-299 - success
// 3xx - 300-399 - redirection
// 4xx - 400-499 - client error
// 5xx - 500-599 - server error

// 1. Create a server
// 1. Callback function
// req,res - request and response
const server = http.createServer((req, res) => {
  res.end("My first node server created succefully");
});

// 2. Start the server
// arguments
// 1.Port No  2. Ip Address 3.Callback Function
server.listen(9000, "127.0.0.1", () => {
  console.log("server has been started successfully");
});
