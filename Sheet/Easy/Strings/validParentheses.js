// Valid Parentheses - Done
//     input: str = "()[]{}"
//     output: true
    
function validParentheses(str) {
    let stack = [];
    for(let i = 0; i < str.length; i++) {
        if(str[i] === '(' || str[i] === '{' || str[i] === '[') {
            stack.push(str[i]);
        }
        if(stack.length === 0) {
            return false;
        }
        let chk = null;
        switch(str[i]) {
            case ')':
                chk = stack.pop();
                if(chk === '{' || chk === '[') {
                    return false;
                }
                break;
                
            case '}': 
                chk = stack.pop();
                if(chk === '(' || chk === '[') {
                    return false;
                }
                break;
                
            case ']':
                chk = stack.pop();
                if(chk === '(' || chk === '{') {
                    return false;
                }
                break;
        }
    }
    return (stack.length === 0);
}
console.log(validParentheses("()[]{}"));