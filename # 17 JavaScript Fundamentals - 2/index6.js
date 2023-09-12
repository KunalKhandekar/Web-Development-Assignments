const productDetails = {
    name : "Apple 2020 MacBook Air Laptop",
    price : 82000,
    color : "Grey",
    hardDisk : "256 GB"
};

function printTasks(productDetails) {
    console.log("Below are the product details.");
    for (const key in productDetails) {
        console.log(`${key} : ${productDetails[key]}`)
    };
};

printTasks(productDetails);

// OUTPUT:
// Below are the product details.
// name : Apple 2020 MacBook Air Laptop
// price : 82000
// color : Grey
// hardDisk : 256 GB