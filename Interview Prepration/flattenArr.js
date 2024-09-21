
function flattenArray(arr) {
    let flattened = [];
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        flattened = flattened.concat(flattenArray(arr[i]));
      } else {
        flattened.push(arr[i]);
      }
    }
    return flattened;
  }
  
  const arr = [
    [1, 2],
    [3, 4],
    [5, [6, 7]],
    [8, 9, 10]
  ];
  
  const flattenedArr = flattenArray(arr);
  console.log(flattenedArr);
  