// Write a JavaScript program that calculates the area of a circle using the Math object's properties and methods.

function CalculateCirlceArea(radius) {
    let area = Math.PI * Math.pow(radius, 2);
    area = Math.round(area)
    console.log(`The area of the circle with radius ${radius} is ${area} sq. cm.`)
};

let circleradius = 10;
CalculateCirlceArea(circleradius);

// OUTPUT: The area of the circle with radius 10 is 314 sq. cm.