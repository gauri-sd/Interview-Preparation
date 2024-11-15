function validPalindrome(num) {
    let str = num.toString();
    let start = 0;
    let end = str.length - 1;
    
    while(start < end) {
        if(str[start] !== str[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true;
}

function nearestPlinderome(num) {
    let temp1 = num;
    let temp2 = num;
    let isPalindrome = false;
    while(!isPalindrome) {
        let isAddedPalindrome = validPalindrome(temp1);
        if(isAddedPalindrome) {
            return temp1;
        } else {
            temp1++;
        }
        
        let isSubPalindrome = validPalindrome(temp2);
        if(isSubPalindrome) {
            return temp2;
        } else {
            temp2--;
        }
    }
}

console.log(nearestPlinderome(123)); //121
console.log(nearestPlinderome(119)); //121
console.log(nearestPlinderome(1257)); //1221
console.log(nearestPlinderome(121)); //121
