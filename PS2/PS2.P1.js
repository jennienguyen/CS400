// Write two generators that together implement a series of even Fibonacci numbers.

const fibs = function* () {
    yield 0;
    yield 1;
    let [val1, val2] = [0, 1];
    let result;
    while (true) {
        result = val1 + val2;
        val1 = val2;
        val2 = result;
        yield result
    }
};

const fibonacciEven = function* () {
    const iterator = fibs();
    yield iterator.next().value;
    let skip2,skip1;
    while (true) {
        // we want to skip the next 2 fibonacci numbers because they are odd.
        // fibonacci pattern is even, odd, odd, even, odd, odd...
        skip1 = iterator.next().value;
        skip2 = iterator.next().value;
        yield iterator.next().value;
    }
};

myFibs = fibonacciEven();
let count = 6;
while (count --> 0) {
    console.log(myFibs.next().value)
}
