/////////////  1st

function fibonaci_Recursion(x) {
  if (x <= 1) {
    return x;
  } else {
    return fibonaci_Recursion(x - 1) + fibonaci_Recursion(x - 2);
  }
}

for (let i = 0; i < 10; i++) {
  console.log(fibonaci_Recursion(i));
}

/////////////   2nd

let n1 = 0;
n2 = 1;
let sum = 0;
let arr = [];
arr[0] = n1;
arr[1] = n2;
function fibonaci() {
  for (let i = 1; i < 10; i++) {
    sum = n1 + n2;
    n1 = n2;
    n2 = sum;
    console.log(sum);
  }
}

fibonaci();
