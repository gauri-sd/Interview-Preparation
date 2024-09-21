const arr = [1, 1, 3, 2, 3];

function canBalance(arr) {
  let sum = 0;
  let totalSum = 0;
  // find total sum
  for (let i = 0; i < arr.length; i++) {
    totalSum = totalSum + arr[i];
  }
  // find half
  let half = totalSum / 2;
  if (half % 1 !== 0) {
    return false;
  }
  //
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
    if (sum === half) {
      return true;
    }
  }
  return false;
}

console.log(canBalance(arr));
