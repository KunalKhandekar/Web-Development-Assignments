const sentences = "please please submit your assignment on time, your assignments are important";

function countWords(sentence) {
    const wordMap = new Map();

    const words = sentence.toLowerCase().match(/\b\w+\b/g);

    for (const word of words) {
        if (wordMap.has(word)) {
            wordMap.set(word, wordMap.get(word) + 1);
        } else {
            wordMap.set(word, 1);
        };
    };

    return wordMap;
};

let result = countWords(sentences);
console.log(result);


// OUTPUT:

// Map(9) {
//     'please' => 2,
//     'submit' => 1,
//     'your' => 2,
//     'assignment' => 1,
//     'on' => 1,
//     'time' => 1,
//     'assignments' => 1,
//     'are' => 1,
//     'important' => 1
//   }