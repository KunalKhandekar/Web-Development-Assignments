function hasUniqueCharacters(username) {
    const characterSet = new Set();

    for (const char of username) {
        if (characterSet.has(char)) {
            return false; // If character is already in the set, it's not unique
        }
        characterSet.add(char);
    }

    return true; // If all characters are unique, return true
};

const isUnique = hasUniqueCharacters("usrname123");
if (isUnique) {
    console.log("The input string contains only unique characters.")
} else {
    console.log("The input string contains duplicates.")
};