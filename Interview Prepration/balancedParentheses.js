function isBalancedParentheses(str) {
    let stack = [];
    for(let i = 0; i < str.length; i++) {
        if(str[i] === '(' || str[i] === '{' || str[i] === '[') {
            stack.push(str[i]);
        } 

        if(stack.length === 0) {
            return false;
        }

        let check = null;
        switch(str[i]) {
            case ')':
                check = stack.pop();
                if(check === '{' || check === '[') {
                    return false;
                }
                break;
            
            case '}':
                check = stack.pop();
                if(check === '(' || check === '[') {
                    return false;
                }
                break;

            case ']':
                check = stack.pop();
                if(check === '(' || check === '{') {
                    return false;
                }
                break;
        }
    }

    return (stack.length === 0);
}

let expr = isBalancedParentheses("([{}])");
console.log(expr);