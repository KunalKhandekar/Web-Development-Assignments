// Develop a program that accepts an object and a property name, and checks if the object has the specified property.

const student = {
    name : "Minal",
    age : 18,
    grade : "C",
    gender : "Female"
};

function ChecksProperty(obj, property) {
    return obj.hasOwnProperty(property); 
};

console.log(ChecksProperty(student, "name")); // OUTPUT: true
console.log(ChecksProperty(student, "phone")); // OUTPUT: false