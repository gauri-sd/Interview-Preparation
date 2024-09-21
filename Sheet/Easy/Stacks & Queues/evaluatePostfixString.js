// Evaluation of Postfix Expression - Done
//     input: str = "231*+9-"
//     output: -4

function evaluatePostfixExpression(str) {
    let stack = [];
    for(let i = 0; i < str.length; i++) {
        if(!isNaN(parseInt(str[i]))) {
            stack.push(parseInt(str[i]));
        } else {
            op2 = stack.pop();
            op1 = stack.pop();
            
            let result = null;
            switch(str[i]) {
                case '+':
                    result = op1 + op2;
                    break;
                    
                case '-':
                    result = op1 - op2;
                    break;
                    
                case '*':
                    result = op1 * op2;
                    break;
                
                case '/':
                    result = Math.floor(op1 / op2);
                    break;
                    
                default:
                    throw new Error(`Unsupported operator`);
            }
            stack.push(result);
        }
    }
    return stack.pop();
}

console.log(evaluatePostfixExpression("231*+9-"));