// function linearSearch(arr, target) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === target) {
//       return i;
//     }
//   }
//   return -1;
// }

// console.log(linearSearch([5, 3, 9, 1], 9)); // returns 2

let pizza = new Promise((resolve, reject) => {
  let isPizzaReady = true;
  setTimeout(() => {
    if (isPizzaReady) resolve("Pizza delivered");
    else reject("Pizza is not ready");
  }, 1000);
});
pizza
  .then((msg) => console.log(msg))
  .catch((err) => console.log(err))
  .finally(() => console.log("Order process finished"));
