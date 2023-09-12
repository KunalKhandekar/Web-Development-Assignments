const users = ["Anish", "Anas", "Chirag", "Mithun"];


function isUserPresent(Name) {
    SmallerCaseName = Name.toLowerCase();
    if (users.includes(Name)) {
        console.log(`Yes, ${Name} is a valid user.`);
    } else {
        console.log(`No, ${Name} is not a valid user.`);
    };
};

isUserPresent("Mithun");
// OUTPUT: Yes, Mithun is a valid user.
isUserPresent('Rohan');
// OUTPUT: No, Rohan is not a valid user.