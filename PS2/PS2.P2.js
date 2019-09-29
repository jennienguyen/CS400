// Write a generator that is initialized with a sentence and that emits each word of the sentence in turn

const wordGenerator = function* (sentence) {
    let spaceCount = (sentence.split(' ').length - 1);
    while (spaceCount > 0) {
        yield sentence.substr(0,sentence.indexOf(' '));
        sentence = sentence.substr(sentence.indexOf(' ')+1);
        spaceCount--;
    }
    yield sentence
};


myWords = wordGenerator('All I know is something like a bird within her sang');
count = 11;
while (count --> 0) {
    console.log(myWords.next().value);
}