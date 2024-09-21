let s = [0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0];

//////////////////////////////   1st /////////////////////////////////////////
function sort(arr) {
  let low = 0,
    high = arr.length - 1;

  while (low <= high) {
    if (arr[low] == 0) {
      low++;
    } else {
      let temp = arr[low];
      arr[low] = arr[high];
      arr[high] = temp;
      high--;
    }
  }

  return arr;
}

//////////////////////////////   2nd /////////////////////////////////////////

let start = 0;
let end = s.length - 1;
let k = s.length / 2;
console.log(k);

for (let i = 0; i < s.length - k; i++) {
  let temp = 0;
  if (s[start] === 0 && s[end] === 1) {
    start++;
    end--;
  } else if (s[start] === 1 && s[end] === 0) {
    temp = s[start];
    s[start] = s[end];
    s[end] = temp;
    start++;
    end--;
  } else if (s[start] === 0 && s[end] === 0) {
    s[end] = 1;
    start++;
    end--;
  } else if (s[start] === 1 && s[end] === 1) {
    s[start] = 0;
    start++;
    end--;
  }
}
console.log(s);
