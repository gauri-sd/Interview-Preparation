/// MOST INTRESTING PROBLEM ,
// My approch was O(n)2 and it was partially correct which was covering only some cases

// But below approch is O(n) which is covering almost all scenarios!!!

const question = `You have given an array prices where prices[i] is the price of a given stock on the ith day
You want to maximize your profit by choosing a single day to buy one stock and choosing a different day
in the future to sell that stock. Return the maximum profit you can achieve from this transaction. 
'If you cannot achieve any profit, return 0.`;

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

const prices = [2, 4, 1];
function stock() {
  let min = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices.length === 0) {
      return 0; //  Becoz no transactions are there
    }

    if (min > prices[i]) {
      min = prices[i];
    } else {
      maxProfit = Math.max(maxProfit, prices[i] - min);
    }
    console.log("MAXPRO", maxProfit);
  }
  return maxProfit;
}
console.log(stock(prices));

// Without using MATH.max()

let pricesss = [7, 1, 5, 3, 6, 4];
// Output: 5

function stock() {
  let min = pricesss[0];
  let maxProfit = 0;
  let currProfit = 0;
  for (let i = 1; i < pricesss.length; i++) {
    if (pricesss.length === 0) {
      return 0;
    }

    if (min > pricesss[i]) {
      min = pricesss[i];
    } else {
      maxProfit = pricesss[i] - min;
      if (maxProfit < currProfit) {
        maxProfit = currProfit;
      }
      currProfit = maxProfit;
    }
  }
  console.log(maxProfit);
}
stock();
