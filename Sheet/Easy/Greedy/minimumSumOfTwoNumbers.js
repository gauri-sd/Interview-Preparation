function minSumOfTwoNumbers(arr) {
    let num1 = 0; 
    let num2 = 0;
    
    arr.sort(function (a, b) { return a - b });

   for(let i = 0; i < arr.length; i++) {
       if(i % 2 === 0) {
           num1 = num1 * 10 + arr[i];
       } else {
           num2 = num2 * 10 + arr[i];
       }
   }
   return num1 + num2;
}

console.log(minSumOfTwoNumbers([6, 8, 4, 5, 2, 3]));
console.log(minSumOfTwoNumbers([5, 3, 0, 7, 4]));