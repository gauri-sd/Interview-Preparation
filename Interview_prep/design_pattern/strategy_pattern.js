const Purpose = `The Strategy Pattern is a behavioral design pattern, It allows the algorithm to vary 
independently from clients that use it.`

const Scenarios = `When you have multiple algorithms or behaviors: If you have a family of algorithms 
or behaviors that can be used interchangeably, the Strategy Pattern allows you to encapsulate each algorithm
or behavior into its own class.`



const UseCase = `
 1. We define a DiscountStrategy interface with a method applyDiscount that calculates the discounted amount.
 2.PercentageDiscount and FixedDiscount are concrete discount strategies implementing the DiscountStrategy interface
 with their own discount calculation logic.
 3.ShoppingCart is the context class that uses the strategy. It accepts a discount strategy object in its constructor
 and applies the discount strategy during checkout.
 4.By using the Strategy Pattern, we can easily add new discount strategies (e.g., BulkDiscount, CouponDiscount) or
  modify existing ones without changing the core logic of the application. This promotes code flexibility, maintainability,
  and scalability.`

 
// imp
  
class DiscountStrategy{

    applyDiscount() {
        throw new Error("error")
    }
}

class PercentageDiscount extends DiscountStrategy {
    constructor(percentage) {
        super()
        this.percentage = percentage
    }
    applyDiscount(amount) {
        return amount - (amount * this.percentage/100)
     }
}

class FixedDiscount extends DiscountStrategy {
    constructor(discountAmount) {
        super()
        this.discountAmount = discountAmount
    }
    applyDiscount(amount) {
        return amount - this.discountAmount;
     }
}


class ShoppingCart {
  constructor(discountStrategy) {
    this.discountStrategy = discountStrategy;
  }

  // Method to calculate total amount after applying discount
  checkout(amount) {
    return this.discountStrategy.applyDiscount(amount);
  }
}

const amount = 100;
const percentageDiscount = new PercentageDiscount(10);
const fixedDiscount = new FixedDiscount(20);

const shoppingCart1 = new ShoppingCart(percentageDiscount);
console.log(shoppingCart1.checkout(amount)); // Output: 90 (10% discount applied)

const shoppingCart2 = new ShoppingCart(fixedDiscount);
console.log(shoppingCart2.checkout(amount)); // Output: 80 (Fixed $20 discount applied)