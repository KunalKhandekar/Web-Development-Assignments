function calculateTotalCartValue() {
    let totalValue = 0;
    let number = arguments
    for (let i = 0; i < number.length; i++) {
        totalValue += number[i]
    }
    console.log(`The total cart value is ${totalValue}`);
};

calculateTotalCartValue(12, 12, 56, 70);

// OUTPUT: The total cart value is 150