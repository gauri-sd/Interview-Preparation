const arr = [1, 4, 5, 2, 6, 44, 9];
let res = [];
function rotateArr(arr, k) {
  for (let i = k; i < arr.length; i++) {
    res.push(arr[i]);
  }
  for (let i = 0; i < k; i++) {
    res.push(arr[i]);
  }
  return res;
}

console.log(rotateArr(arr, 3));
