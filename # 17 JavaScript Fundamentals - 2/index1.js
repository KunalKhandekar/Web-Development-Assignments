function isUserPresent(Name) {
    SmallerCaseName = Name.toLowerCase();
    if ("mithun" == SmallerCaseName) {
        console.log(`Yes, ${Name} is a valid user.`);
    } else {
        console.log(`No, ${Name} is not a valid user.`);
    };
};

isUserPresent("Mithun");
isUserPresent('Rohan');