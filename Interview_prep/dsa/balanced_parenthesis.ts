let s = "({[}])";  // ({[}])
function balanced(arr){
    let stack = [];
    for(let i = 0;i<arr.length;i++){
    if(arr[i] === '[' || arr[i] === '{' || arr[i] === '('){
        stack.push(arr[i])
    }
    else if(arr[i] === ')' || arr[i] === '}' || arr[i] ===']'){
        const top = stack.pop();
        
        if(arr[i] === ')' && top !== '('){
            return false;
        }
        if(arr[i] === '}' && top !== '{'){
            return false;
        }
        if(arr[i] === ']' && top !== '['){
            return false;
        }
        
    }
    }
    
    
    return (stack.length === 0)
    }
        

console.log(balanced(s))





