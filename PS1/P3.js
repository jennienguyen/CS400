function execute(string, cb) {
    return cb(string);
}

let result1 = execute("supercalifragilisticexpialidocious",
    string => string.split(/(?=c)/g));

console.log(result1);

let result2 = execute("supercalifragilisticexpialidocious",
        string =>   {modifiedString = string.replace(/a/g,'A');
                        numberReplaced = string.match(/a/g).length;
                        return('{\n'+   '     originalString:     ' + string + '\n' +
                                        '     modifiedString:     ' + modifiedString + '\n' +
                                        '     numberReplaced:     ' + numberReplaced + '\n' +
                                        '     length:             ' + string.length) + '\n' + '}'});
console.log(result2);


