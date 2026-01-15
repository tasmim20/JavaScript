# 1.about javascript: JS is a programming language that runs in the browser and on servers (Node.js).

first it build to replace java. after it use as scripting langauge.First name mocha, then livescript then javascript which is single thread langauge.

# 2.Higher order function. A higher-order function (HOF) is a function that either: Takes a function as an argument, or Returns a function.like a chef hiring another chef to help cook.

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

# 3.pure function-A pure function is like a vending machine: same input → always same output; doesn’t change anything outside. No side effects

# Example: Safe to use inside render or map functions.

function add(a,b){
return a+b;
}

# 4.Closure:for remember state. A closure is like a backpack that remembers the items inside,even if you move to a new place.

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
