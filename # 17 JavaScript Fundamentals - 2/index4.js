function MinMaxPrice(products) {
    let MaxProduct = null;
    let MinProduct = null;

    for (i = 0; i < products.length; i++) {
     
        if (!MaxProduct || products[i].price > MaxProduct.price) {
            MaxProduct = products[i];
        };
        if (!MinProduct || products[i].price < MinProduct.price) {
            MinProduct = products[i];
        };
    };

    if (MaxProduct && MinProduct) {
        console.log(`The Product with the maximum amount: ${MaxProduct.name} - ${MaxProduct.price}`);
        console.log(`The Product with the minimum amount: ${MinProduct.name} - ${MinProduct.price}`);
    } else {
        console.log("No products found.");
    };

};

const products = [
    { name: 'Laptop', price: 120000 },
    { name: 'Mobile', price: 70000 },
    { name: 'Laptop Bag', price: 20000 },
    { name: 'Mobile Charger', price: 1500 }
];

MinMaxPrice(products);