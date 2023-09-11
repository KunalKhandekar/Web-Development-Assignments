const sentences = "please please submit your assignment on time, your assignments are important";

function countWords(sentence) {
    const wordMap = new Map();

    const words = sentence.toLowerCase().match(/\b\w+\b/g); // Extracting words from the sentence

    for (const word of words) {
        if (wordMap.has(word)) {
            wordMap.set(word, wordMap.get(word) + 1); // Increment count if word exists in Map
        } else {
            wordMap.set(word, 1); // Initialize count to 1 if word is not in Map
        };
    };

    return wordMap;
};

let result = countWords(sentences);
console.log(result);