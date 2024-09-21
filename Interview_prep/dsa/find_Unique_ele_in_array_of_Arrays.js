// eg:
// Input - [1, 2, 3], [2, 3, 4], [3, 4, 5]
// o/p - [1,5]

const final = [];

function countElementOccurrences(...arrays) {
  const map = new Map();

  for (const array of arrays) {
    for (const ele of array) {
      if (!map.has(ele)) {
        map.set(ele, 1);
      } else {
        map.set(ele, map.get(ele) + 1);
      }
    }
  }

  console.log(map);

  // Iterate over the entries of the map
  for (const [key, value] of map) {
    // Check if the value is equal to 1
    if (value === 1) {
      // If so, push the corresponding key to the final array
      final.push(key);
    }
  }

  console.log(final);
}

countElementOccurrences([1, 2, 3], [2, 3, 4], [3, 4, 5]);
