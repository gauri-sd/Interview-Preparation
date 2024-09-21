
// Find maximum equal sum of every three stacks - Done
//     input:  stack1 = [3, 2, 1, 1, 1];
//             stack2 = [4, 3, 2];
//             stack3 = [1, 1, 4, 1];
//     output: 5

    function maxEqualSum(stack1, stack2, stack3) {
    let sum1 = stack1.reduce((a, b) => a + b, 0);
    let sum2 = stack2.reduce((a, b) => a + b, 0);
    let sum3 = stack3.reduce((a, b) => a + b, 0);

    let i = 0, j = 0, k = 0;

    while (i < stack1.length && j < stack2.length && k < stack3.length) {
        if (sum1 === sum2 && sum3 === sum1) {
            return sum1;
        }

        if (sum1 >= sum2 && sum1 >= sum3) {
            sum1 -= stack1[i++];
        } else if (sum2 >= sum1 && sum2 >= sum3) {
            sum2 -= stack2[j++];
        } else if (sum3 >= sum1 && sum3 >= sum2) {
            sum3 -= stack3[k++];
        }
    }
    return 0;
}

const stack1 = [3, 2, 1, 1, 1];
const stack2 = [4, 3, 2];
const stack3 = [1, 1, 4, 1];

const result = maxEqualSum(stack1, stack2, stack3);
console.log("Maximum equal sum of three stacks:", result);