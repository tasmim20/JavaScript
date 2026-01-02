//The word “async” before a function means one simple thing: a function always returns a promise. Other values are wrapped in a resolved promise automatically.
//async/await and promise.then/catch
//When we use async/await, we rarely need .then, because await handles the waiting for us. And we can use a regular try..catch instead of .catch. //That’s usually (but not always) more convenient.But at the top level of the code, when we’re outside any async function, we’re syntactically unable to use await, so it’s a normal practice to add .then/catch to handle the final result or falling-through error, like in the line (*) of the example above.
async function f() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 8000);
  });

  let result = await promise; // wait until the promise resolves (*)

  console.log(result); // "done!"
}

f();
