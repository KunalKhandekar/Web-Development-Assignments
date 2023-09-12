let userInformation = new Map();

function addUser(name, age, email) {
    userInformation.set(name, { age, email });
}

function updateUser(name, age, email) {
    if (userInformation.has(name)) {
        userInformation.set(name, { age, email });
    } else {
        console.log(`${name} not found.`);
    }
}

function deleteUser(name) {
    if (userInformation.has(name)) {
        userInformation.delete(name);
    } else {
        console.log(`${name} not found.`);
    }
}

function displayUser(name) {
    if (userInformation.has(name)) {
        console.log(`Name: ${name}`);
        console.log(`Age: ${userInformation.get(name).age}`);
        console.log(`Email: ${userInformation.get(name).email}`);
    } else {
        console.log(`${name} not found.`);
    }
}

// Adding users
addUser("John Doe", 30, "john@example.com");
addUser("Jane Smith", 25, "jane@example.com");

// Displaying user information
console.log("User Information:");
displayUser("John Doe");
displayUser("Jane Smith");

// Updating user information
updateUser("John Doe", 31, "john.doe@example.com");

// Displaying updated information
console.log("\nUpdated User Information:");
displayUser("John Doe");

// Deleting a user
deleteUser("Jane Smith");

// Displaying user information after deletion
console.log("\nUser Information after Deletion:");
displayUser("Jane Smith");

// OUTPUT:

// User Information:
// Name: John Doe
// Age: 30
// Email: john@example.com
// Name: Jane Smith
// Age: 25
// Email: jane@example.com

// Updated User Information:
// Name: John Doe
// Age: 31
// Email: john.doe@example.com

// User Information after Deletion:
// Jane Smith not found.