// Will we see the same thing that we did with the Ruby code?
// Yes.
// We will go over this number that pops up soon.
console.log("Oh");

setTimeout(function(){
  console.log("Hi...");
}, 1000);

setTimeout(function(){
  console.log("Just waking up...");
}, 2000);

// What if we add these console logs in?

console.log("*Rubs eyes*")
console.log("*Yawns*")

// NO. JavaScript is a NON-BLOCKING language.
// It DOES NOT wait for a line to finish before moving on to the next one.
// Why/when might this cause problems for us?
// Single Threaded
// We get this window object free with the JS Engine-- it gives us methods that allow us to run our code asynchronously (ex. setTimeout, setInterval, fetch)

// setTimeout & setInterval return a number. This is an ID for that timer. Hanging on to that ID allows us to stop or pause the timer
// setTimeout allows us to run a function ONCE after a period of time.
// setInterval allows us to run a function repeatedly starting after the interval of time and then repeating continously at that interval