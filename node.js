/*
Shines of Node.js

Single-Threaded 
None-blocking
Event-driven
Data-Intensive
I/O intensive
Web Servers
Real Time servers 
APIs fronting NoSQL DB
Command line utilities
Built Tooling 




/////////////////////////////////////

Node.js is completely event driven. 
Basically a server consists of one thread processing one event one 
after the another.
A new request commig is one kind of event.
The server starts processing the request when it the request requires
some kind of blocking operation, the server doesn't wait untill the 
blocking operation got completed insted the server registers a callback
function.
The server then immediately starts to process another event 
(probably another request)
When the blocking (i/o) operation is completes that is another kind of 
event, the server will process(continue working on the request) by excutint 
callback as soon as it gets a time.

There is no need to create a thread or switch between threads in node.js

To use the advantage of multicore processers we can start multiple instane 
of node.js applications



Behind the scene Node.js(indead javascript) uses kernel level multiple 
threads.
There is a pool of I/O works proveded by kernel level threads whose 
job is to recive I/O interupts and put the corrosponding even  into the 
evnet queue to be processed by the main thread.

The worked thread prevets the main thread from being interupted



Node.js uses 
1.A single thread to serve all the http request
2. Multiple thread in thread pool( in libuv) for handeling any blocking operations

Libuv: Is a library to handle asynchronous I/O

In Node.js a request never queued and it always gets processed as soon as reveived by  the server.


Require is a function which accepts parameter 'path'  and returns module.exports
  . To load modules that come bundled with Node.js like file system and HTTP from Node.js API
  . To load third-party libraries like express and mongoose 
  . To require our own file and modularize the project. 



V8: is an open source runtime engine writen in C++


Events: 
  1. System Events =>  from libuv  like finishing reading files 
  2. Custom Events => from javaScript




*/

// The folowing code is not ideal for node js
// Blocking Operations
// Compute intensive
// CPI || Processor intensive
// The concepts of woker theaddes can be used here as well

// let sum = 0;
// let start = new Date();
// for (let i = 0; i < 10000000; i++) {
//   sum += i;
// }
// console.log({ sum, time: new Date() - start });

console.log("Starting the app"); //1

// setTimeout(() => {
//   console.log("setTimeout");
// }, 3000);

setTimeout(() => {
  console.log("setTimeout with Zero"); //4
}, 0);
setImmediate(() => {
  console.log("setImmediate"); // 5
});

console.log("Finishing the app"); //2

Promise.resolve("Success").then(
  //3
  function (value) {
    console.log(value); // "Success"
  },
  function (value) {
    // not called
  }
);
Promise.resolve("Success").then(
  function (value) {
    console.log(value); // "Success"
  },
  function (value) {
    // not called
  }
);
// Resolvewd promise runns faster than setImmediate timers
// setTimeout(callback, 0) means defer the excution of the function callback untill the excution
// stack gets empty
