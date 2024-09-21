// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]

// 1st METHOD
const list1 = [1, 2, 4];
const list2 = [1, 3, 4];
let Merged = [];
Merged = [...list1, ...list2];
Merged.sort((a, b) => a - b);
console.log(Merged);

// 2nd Method ----> USING 2 POINTER APPROACH

const arr1 = [1, 2, 4];
const arr2 = [1, 3, 4];

let merged = [];

let i = 0,
  j = 0;

while (i < arr1.length && j < arr2.length) {
  if (arr1[i] < arr2[j]) {
    merged.push(arr1[i]);
    i++;
  } else {
    merged.push(arr2[j]);
    j++;
  }
}

while (i < arr1.length) {
  merged.push(arr1[i]);
  i++;
}
while (j < arr2.length) {
  merged.push(arr2[j]);
  j++;
}

console.log("MERGED", merged);
