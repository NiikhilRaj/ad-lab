class Employee {
    constructor(firstName, lastName, yearsWorked) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.yearsWorked = yearsWorked;
    }
}

// 3. Set up a prototype to return details
Employee.prototype.getDetails = function() {
    return `${this.firstName} ${this.lastName} has worked here for ${this.yearsWorked} years.`;
};

// 2. Create employees and add to array
const employees = [
    new Employee("Delwin", "Roy", 2),
    new Employee("Sakshi", "Singh", 3),
    new Employee("Rohan", "Das", 5)
];

// 4. Iterate and output
employees.forEach(emp => {
    console.log(emp.getDetails());
});