//write a function that takes a string of a math expression and return the value of the expression

function addbits(s) {
    var total = 0;
    s = s.replace(/\s/g, '').match(/[+\-]?([0-9\.\s]+)/g) || [];
    while(s.length) total += parseFloat(s.shift());
    return total;
}
console.log(`${addbits('8%3')}`);
