function hasUniqueCharacters(username) {
    const characterSet = new Set();

    for (const char of username) {
        if (characterSet.has(char)) {
            console.log("The input string contains duplicates.")
            return;
        }
        characterSet.add(char);
    }
    console.log("The input string contains only unique characters.")
    return;
};

hasUniqueCharacters("username123");
// OUTPUT: The input string contains duplicates.

hasUniqueCharacters("mithun");
//OUTPUT: The input string contains only unique characters.