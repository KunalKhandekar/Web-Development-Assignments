// Create a function that takes a string as input and returns the string reversed using string manipulation techniques.

const string = "ZINDAGI NA MILEGI DUBARA";

function ReverseString(string) {
    let str = string.split('');
    reverse = str.reverse();
    joined = reverse.join('');
    console.log(joined);
};

ReverseString(string);

// OUTPUT: ARABUD IGELIM AN IGADNIZ