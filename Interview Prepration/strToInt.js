function stringToInteger(str) {
  // let parsedInt = parseInt(str, 10);
  let parsedInt = +str;
  return parsedInt;
}

const str = "42";
const integer = stringToInteger(str);
console.log("Parsed integer:", integer);