# 1.about javascript: JS is a programming language that runs in the browser and on servers (Node.js). invent my Brendan Eich(also create mozila)

first it build to replace java. after it use as scripting langauge.First name mocha, then livescript then javascript which is single thread langauge.
#Data Types
Primitive: string, number, boolean, null, undefined, symbol
Non-primitive: object, array, function

# 2. == vs ===

== not check type ===strict check also type.
console.log(5 == "5"); // true (type conversion)
console.log(5 === "5"); // false (strict check)

# 3.Higher order function. A higher-order function (HOF) is a function that either: Takes a function as an argument, or Returns a function.like a chef hiring another chef to help cook.

# Example: Reusable enhancements like loading screens, auth checks,

**In this case:
var createHelloWorld = function(){
return function(...args)
}
**
createHelloWorld returns another function, so it meets the HOF definition. ✅
The inner function is just a normal function, not higher-order. It doesn’t return another function or take a function as an argument.

Summary:
createHelloWorld → higher-order function
Returned inner function → normal function

# 4.pure function-A pure function is like a vending machine: same input → always same output; doesn’t change anything outside. No side effects

# Example: Safe to use inside render or map functions.

function add(a,b){
return a+b;
}

# 5.Closure:for remember state. A closure is like a backpack that remembers the items inside,even if you move to a new place.

# Example: custom hooks, event handlers, timers, async callbacks that need to remember previous state without using useState.

var createCounter = function(n){ //this is HOF
let count = n;
return function(){ // <-- This is the closure
return count++;
}
}
const counter = createCounter(5)
console.log(counter(5))
console.log(counter(6))
console.log(counter(7))

// Custom Hook
function useCounter(initialValue) {
const [count, setCount] = useState(initialValue);

// Closure: increment remembers count
const increment = () => setCount(prev => prev + 1);

// Pure function: calculates double without side effects
const double = () => count \* 2;

return { count, increment, double }; // Higher-order style: returns functions
}
Custom hooks are used to:
Reuse logic across components
Keep components clean
Remember state and use closures
Return functions or values for components to use
Make code maintainable and testable

# 6.Hoisting: Hoisting is JavaScript’s behavior of moving variable and function declarations to the top of their scope before the code runs.Only declarations are hoisted, not assignments.

console.log(a); // undefined
var a = 5;
What JS actually does internally:
var a; // declaration hoisted
console.log(a); // undefined
a = 5; // assignment stays in place
You usually don’t rely on hoisting in modern React because let, const, and arrow functions are preferred.
Understanding hoisting helps debug undefined variables or errors.

greet(); // "Hello"
function greet() {
console.log("Hello");
}
Function declarations are hoisted completely (name + body)

sayHi(); // Error
var sayHi = function() { console.log("Hi"); };
Only the variable sayHi is hoisted, not the function assignment

# 7.callback: a function passed to another function; runs after the main function. Used for async tasks, events, api calls. In JS, callbacks let you run a function after another function finishes (synchronously or asynchronously). “Do this task, and call me back when you’re done.”

<button onclick={() => console.log("clicked")}> click me </button>

<button> → clickable element
onClick → event that runs when clicked
() => console.log("clicked") → a function that prints to console

# 8. undefined – The “Not Set Yet”, Variable exists, but no value assigned

let a;
console.log(a); // undefined

# 9. ReferenceError – The “Box Doesn’t Exist”

console.log(b); // ReferenceError: b is not defined or declared

# 10. null

Intentionally empty
let a = null;

Story to remember:
undefined → box exists, empty by mistake
null → box exists, empty by choice
ReferenceError → box doesn’t exist at all

# 11.ES6 Features

a. Destructuring
b. Spread & Rest operator
c. Default parameters
d. Modules: import & export

# 12. Promises – The Pizza Delivery Story 🍕-- pending, resolved, rejected

$$
Story:
A promise is like ordering pizza:
Pending → Pizza is being cooked
Resolved (fulfilled) → Pizza is ready and delivered
Rejected → Pizza order failed
$$

let pizza = new Promise((resolve, reject)=>{
let isPizzaReady = true;
setTimeout(()=>{
if(isPizzaReady) resolve("Pizza delivered");
else reject("Pizza is not ready")
},1000)

})
pizza.then(msg=>console.log(msg)).catch(err =>console.log(err)).finally(() => console.log("Order process finished"));

Output if isPizzaReady = true:
Pizza delivered!
Order process finished

# 13. Async / Await – Synchronous Look-- async/await makes code look like normal code. You wait for the pizza to arrive before continuing.

async function orderPizza() {
try {
let msg = await pizza; // wait for promise to resolve
console.log(msg);
} catch(err) {
console.log(err);
} finally {
console.log("Order done!");
}
}
orderPizza();

# 14. Event Loop – The Restaurant Story 🍔

$$
Imagine a single chef (JavaScript) in a small kitchen.
The chef can cook only one dish at a time (single-threaded).
Orders come from customers (your code).
The Kitchen Setup:
Call Stack → the chef’s to-do plate (what the chef is cooking right now)
Web APIs → helpers like the oven, fridge, or blender (handles async stuff like timers, fetch requests)
Callback Queue → orders ready from helpers, waiting for the chef to cook
$$

$$
JS chef = single-threaded
Call Stack = chef’s current cooking list
Web APIs = helpers that do async work
Callback Queue = orders ready from helpers
Event loop = chef checks stack and picks new order
$$

**console.log("Start"); // synchronous, chef cooks immediately
setTimeout(() => console.log("From setTimeout"), 0); // async, goes to oven first
Promise.resolve().then(() => console.log("From Promise")); // VIP order, goes to microtask queue
console.log("End"); // synchronous, chef cooks immediately**

# JS feels multithreaded for this reason---

# Imagine JS is a chef in a kitchen: Chef starts cooking Start → prints Start, Chef moves to next task End → prints End, Meanwhile, the oven (setTimeout) is working in the background, The VIP order (Promise) finishes first because microtasks have priority → prints Promise done,Oven finishes → prints Timer done

# 15.garbage collection: Garbage Collection is JavaScript automatically cleaning up memory that’s no longer used, so your app doesn’t get slow or crash.

$$
function createUser() {
  let user = { name: "Bob" };
  return function() {
    console.log(user.name);
  };
}

let getUser = createUser();
getUser(); // closure keeps 'user' alive

getUser = null; // now 'user' can be garbage collected


$$
