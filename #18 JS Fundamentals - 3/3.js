// Write a program that takes an object as input and returns the number of properties it has.

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

function CountNumberOfProperties(obj) {
    let number = Object.keys(obj).length;
    console.log(`The given object has ${number} properties.`);
}

CountNumberOfProperties(person);

// OUTPUT: The given object has 4 properties.