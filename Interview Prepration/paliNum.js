function isPalindrome(n) {
  // let temp = n;
  // if(n < 0) {
  //     return false;
  // }
  
  // let digit = 0;
  // let rev = 0;
  
  // while(n !== 0) {
  //     digit = n % 10;
  //     rev = rev * 10 + digit;
  //     n = Math.floor(n / 10);
  // } 
  // return (rev === temp);
    // }

  const numStr = n.toString();
  const reversedStr = numStr.split('').reverse().join('');
  return numStr === reversedStr;
};

console.log(isPalindrome(121));