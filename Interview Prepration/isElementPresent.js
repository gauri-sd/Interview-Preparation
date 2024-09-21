function isElePresent1(arr1, arr2) {
    for(let i = 0; i < arr1.length; i++) {
        for(let j = 0; j < arr2.length; j++) {
            if(arr1[i] === arr2[j]) {
                return true;
            }
        }
    }
    return false;
}

function isElePresent2(arr1, arr2) {
    let obj = {};
    for(let i = 0; i < arr1.length; i++) {
        if(!obj[arr1[i]]) {
            obj[arr1[i]] = true;
        }
    }
    
    for(let i = 0; i < arr2.length; i++) {
        if(!obj[arr2[i]]) {
            return false;
        }
        return true;
    }
}

let arr1 = ['a', 'b', 'c', 'x'];
let arr2 = ['x', 'y', 'z'];
console.log(isElePresent1(arr1, arr2));
console.log(isElePresent2(arr1, arr2));