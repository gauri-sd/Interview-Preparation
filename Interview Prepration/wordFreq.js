// Gauri is a good developer, gauri is having 2 years experience
// Gauri : 2
// is : 2
// a : 1
// good : 1 
// developer : 1
// having : 1
// 2 : 1
// years : 1
// experience : 1
// no library function like string.split
// you can use toLowercase



function chkWordFreq(str) {
  str = str.replace(/[^a-zA-Z0-9 ]/ , '').toLowerCase();
  console.log(str);
  
  let obj = {};
  word = '';
  for(let i = 0; i < str.length; i++) {
    if(str[i] !== ' ') {
      word += str[i];
    } else if(word) {
      obj[word] = (obj[word] || 0) + 1;
      word = ''
    }
  }
  if(word) {
    obj[word] = (obj[word] || 0) + 1;
  }
  return obj;
}

let res = chkWordFreq("Gauri is a good developer, gauri is having 2 years experience");
console.log(res);