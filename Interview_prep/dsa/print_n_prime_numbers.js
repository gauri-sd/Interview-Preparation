function checkPrime(num) {
  if (!num) {
    console.log("Num not found");
    return;
  }
  let flag = true;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function printNumbers(num) {
  let res = [];
  let count = 0;
  let i = 2;
  while (count < num) {
    if (checkPrime(i)) {
      res.push(i);
      count++;
    }
    i++;
  }

  return res;
}

console.log(printNumbers(12));
