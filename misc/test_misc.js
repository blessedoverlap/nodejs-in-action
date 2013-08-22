/*
setTimeout(function() {
  console.log('I execute first.');
  setTimeout(function() {
    console.log('I execute next.');
    setTimeout(function() {
      console.log('I execute last.');
    }, 100);
  }, 500);
}, 1000);
*/

/*
var example_emitter = new (require('events').EventEmitter);
example_emitter.on("test", function () { console.log("test"); });
example_emitter.on("print", function (message) { console.log(message); });
example_emitter.emit("test");
example_emitter.emit("print", "hello world");
example_emitter.emit("unhandled");
*/

var EventEmitter = require('events').EventEmitter,
    ee = new EventEmitter();

function callback() {
  console.log("Callback has been called!");
}

console.log('First');
ee.once("event", callback);
ee.emit("event");
ee.emit("event");

console.log('Second');
ee.on("event", callback);
ee.emit("event");
ee.emit("event");
ee.removeListener("event", callback);
ee.emit("event");

console.log('Third');
ee.on("event", callback);
ee.emit("event");
ee.removeAllListeners("event");
ee.emit("event");

function foo() {
  console.log(bar);
}

foo();
