let num = 25;

for (let i = 1; i < num; i++) {
  let k = 5;
  console.log(i);
  if (i % 5 === 0) {
    while (k > 0) {
      console.log("*");
      k--;
    }
    i = i + 5;
  }
}

/////////////////////////////////  OR /////////////////////////////////////////

for (let i = 1; i < num1; i++) {
  let k = 5;
  if (i % 5 === 0) {
    console.log(i);
    while (k >= 0) {
      console.log("*");
      k--;
    }
  } else {
    console.log(i);
  }
}
