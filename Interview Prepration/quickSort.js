function quickSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
  
    let pivotIndex = Math.floor(arr.length / 2);
    let pivot = arr[pivotIndex];

    let left = [];
    let right = [];

    for (let i = 0; i < arr.length; i++) {
        if (i === pivotIndex) {
          continue; // Skip the pivot element
        }
        if (arr[i] < pivot) {
          left.push(arr[i]);
        } else {
          right.push(arr[i]);
        }
    }

    let sortedLeft = quickSort(left);
    let sortedRight = quickSort(right);

    return [...sortedLeft, pivot, ...sortedRight];
  }
  
  const unsortedArray = [10, 16, 8, 12, 15, 6, 3, 9, 5];
  const sortedArray = quickSort(unsortedArray);
  console.log(sortedArray);
  