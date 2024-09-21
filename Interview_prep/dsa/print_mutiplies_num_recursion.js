//////////////////////  1st  //////////////////////////////////

let res = [];
let num = 1;
let j = 0;
function mutilpy(x, y) {
  let i = 1;
  while (j < y) {
    num = x;
    num = num * i;
    i++;
    j++;
    console.log("num", num);
    res.push(num);
  }
  console.log("RES", res);
}
mutilpy(3, 6);

//////////////////////  2nd USING RECURSION  //////////////////////////////////
let arr = [];
function mutilpy(x, i, y) {
  if (i > y) {
    return "Fieshed";
  }
  console.log(i * x);
  arr.push(i * x);
  return mutilpy(x, i + 1, y);
}
console.log(mutilpy(4, 2, 4), arr);
