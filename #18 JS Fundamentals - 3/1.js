// 1) Create an object representing a car with properties like "make," "model," and "year." Write a function to display all the properties of the car.

let car = {
    make : "Honda",
    model : "Activa",
    year : 2016
};

function displayCarProperties(car){
    for (const property in car) {
        console.log(`${property} : ${car[property]}`)
    };
};

displayCarProperties(car);

// OUTPUT :

// make : Honda
// model : Activa
// year : 2016