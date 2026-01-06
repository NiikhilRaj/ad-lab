const inventory = [];

const item1 = {
    name: "Laptop",
    model: "XPS 15",
    cost: 1200,
    quantity: 5
};

const item2 = {
    name: "Phone",
    model: "iPhone 14",
    cost: 999,
    quantity: 12
};

const item3 = {
    name: "Tablet",
    model: "iPad Air",
    cost: 600,
    quantity: 8
};

inventory.push(item1, item2, item3);

console.log("Full Inventory:", inventory);

console.log("Quantity of 3rd item:", inventory[2].quantity);