const arr = [1, 2, [3, 4], 5, [[6, 7], 8, 9], 10];
const res = [];

function flat(ele) {
  if (typeof ele === "number") {
    res.push(ele);
    return;
  }
  if (Array.isArray(ele)) {
    for (let i = 0; i < ele.length; i++) {
      flat(ele[i]);
    }
  }
}

for (let i = 0; i < arr.length; i++) {
  flat(arr[i]);
}
console.log(res);
