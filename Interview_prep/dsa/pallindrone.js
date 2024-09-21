const target = 121;

function pallendrone(x) {
  let temp = x;
  let str = "";
  // First reverse x and store it in a str

  while (temp > 0) {
    const digit = temp % 10;
    str = str + digit;
    temp = Math.floor(temp / 10);
  }

  if (x === parseInt(str)) {
    return true;
  } else {
    return false;
  }
}

console.log(pallendrone(target));
