const s = "listten";
let target = "tentisl";

function ana(s, taget) {
  let map = new Map();
  if (s.length - target.length !== 0) {
    return false;
  }
  for (let i = 0; i < s.length; i++) {
    if (!map.has(s[i])) {
      map.set(s[i], 1);
    } else {
      map.set(s[i], map.get(s[i]) + 1);
    }
  }
  console.log(map);
  for (ele of target) {
    if (map.has(ele) && map.get(ele) === 1) {
      map.delete(ele);
    } else if (map.has(ele) && map.get(ele) !== 1) {
      let num = map.get(ele);
      map.set(ele, num - 1);
    } else {
      return false;
    }
  }
  return true;
}

console.log(ana(s, target));

/////////////////////////////////////////// 2nd approach ////////////////////////////////////////////////

let s1 = "listen";
let target1 = "netsil";

let obj1 = {};
let obj2 = {};

function anagram() {
  for (let key of s1) {
    obj1[key] = (obj1[key] || 0) + 1;
  }
  for (let key of target1) {
    obj2[key] = (obj2[key] || 0) + 1;
  }

  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
}

console.log(anagram());
console.log("obj1 ", obj1);
console.log("obj2 ", obj2);
