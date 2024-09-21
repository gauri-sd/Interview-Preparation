let str = "my.Program.is.best";

// output : best.is.program.my

////////////////////////////////////////////////////    1 ///////////////////////////////////////////////

let arr = str.split(".");
console.log(arr);
let res = "";
for (let i = arr.length - 1; i >= 0; i--) {
  res = res + arr[i];
  if (i !== 0) {
    res = res + ".";
  }
}

/////////////////////////////////////////////////////    2 ///////////////////////////////////////////////

let subs = "";
let revSubs = "";
let final = "";
function reverse_str(str) {
  for (let i = str.length - 1; i >= 0; i--) {
    subs += str[i];
    if (str[i] === ".") {
      for (let i = subs.length - 1; i >= 0; i--) {
        revSubs += subs[i];
      }
      revSubs = revSubs.substring(1);
      revSubs = revSubs + ".";
      final = final + revSubs;
      subs = "";
      revSubs = "";
    }
  }
  for (let i = 0; i < str.length - 1; i++) {
    final = final + str[i];
    if (str[i] === ".") {
      break;
    }
  }
  final = final.substring(0, final.length - 1);
  return final;
}

console.log(reverse_str(str));
