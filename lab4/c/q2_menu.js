class OrderCalculator {
    // 1. Private field declarations for prices
    #priceItem1 = 150; 
    #priceItem2 = 250; 

    constructor(qtyItem1, qtyItem2) {
        // 2. Constructor gets argument values
        this.qtyItem1 = qtyItem1;
        this.qtyItem2 = qtyItem2;
    }

    // 3. Method to calculate total
    calculateTotal() {
        return (this.qtyItem1 * this.#priceItem1) + (this.qtyItem2 * this.#priceItem2);
    }

    // 4. Getter property
    get totalCost() {
        return this.calculateTotal();
    }
}

// Create objects with different combinations
const order1 = new OrderCalculator(2, 1); // 2 of Item1, 1 of Item2
const order2 = new OrderCalculator(5, 0); // 5 of Item1
const order3 = new OrderCalculator(1, 10); // 1 of Item1, 10 of Item2

console.log(`Order 1 Total: ₹${order1.totalCost}`);
console.log(`Order 2 Total: ₹${order2.totalCost}`);
console.log(`Order 3 Total: ₹${order3.totalCost}`);