function loop() {
  for (var i = 1; i <= 5; i++) {
    setTimeout(() => {
      console.log(`Iteration ${i}`);
    }, i * 1000);
  }
}
// The issue you're encountering is due to the use of var to declare the variable i inside the loop. Since var
// has function scope, by the time the setTimeout callbacks execute, the loop has already completed, and the value
//  of i is equal to 6.

// To fix this issue and have the correct value of i logged in each iteration, you can use let instead of var, which
// has block scope

function loop() {
  for (var i = 1; i <= 5; i++) {
    (function (index) {
      setTimeout(() => {
        console.log(`Iteration ${index}`);
      }, index * 1000);
    })(i);
  }
}

// syntax: (function () {

// })()
// immediately invoked function expression (IIFE)  : Each iteration of the loop creates a new scope with its own index variable, ensuring that the correct value is
// captured by the setTimeout callback.
loop();
