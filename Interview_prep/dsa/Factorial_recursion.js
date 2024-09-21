/////////////////  1st Normal \\\\\\\\\\\\\\\\\\\\\
/////////////////////// v.v.v.vv.v.v. IMPPPPP//////////////////////////////

let question = `means first its recursion to dig inside and then backtraking to come out?`;
let answer = `Yes, exactly! Recursion involves calling the function from within itself, which leads to a series of
 nested function calls. Each recursive call creates a new activation record (or stack frame) on the call stack.
 When the base case is reached, the function starts to "unwind" or backtrack, returning values and releasing
 activation records from the call stack until it reaches the original caller.

In the case of the factorial function fact(k), it digs deeper into the recursion, computing the factorial value as it
goes down the stack. Once it hits the base case (k = 0 or k = 1), it starts to backtrack, multiplying the results of each
 deeper call as it returns back up the stack until it reaches the original call, which produces the final result.
 This process is akin to "diving" into the recursion and then "climbing" back out.`;
const n = 4;
let res = 1;

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else if (n > 1) {
    for (let i = n; i > 0; i--) {
      console.log("i", i);
      res = res * i;
      console.log("res", res);
    }
    console.log(res);
  }
}

factorial(4);

function factorial_recursion(n) {
  if (n <= 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

factorial_recursion(4);
