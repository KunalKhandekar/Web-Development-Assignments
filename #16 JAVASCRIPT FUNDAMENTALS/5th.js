let package;
package = "standard";
// package = "express";
// package = "overnight";

switch (package) {
    case "standard":
        console.log("Delivery expected in 3-5 Days");
        break;
    case "express":
        console.log("Delivery expected in 1-2 Days");
        break;
    case "overnight":
        console.log("Delivery expected by tommorrow");
        break;
}