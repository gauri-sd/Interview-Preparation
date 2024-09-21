function amstrong(num) {
  let temp = num;
  let sum = 0;
  console.log(temp > 0, temp);
  while (temp > 0) {
    let rem = temp % 10;
    temp = parseInt(temp / 10);
    console.log(rem);
    sum += rem * rem * rem;
  }
  console.log("sum", sum);
  if (sum === num) {
    console.log("Amstong");
  }
}
