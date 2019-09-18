//write a function that takes a string of a math expression and return the value of the expression

const evaluate = string => {
    let operator = string.charAt(1);
    let left = (parseInt(string.charAt(0)));
    let right = parseInt(string.charAt(2));
    switch (operator) {
        case '+':
            return (left, right) => left + right;
            break;
        case '*':
            return (left, right) => left * right;
            break;
        case '-':
            return (left,right) => left - right;
            break;
        case '/':
            return (left,right) => left / right;
            break;
        case '%':
            return (left,right) => left % right;
            break;
    }
}

const expression1 = '4+2';
let operator1 = evaluate(expression1);
console.log(`${expression1} = ${operator1((parseInt(expression1.charAt(0))),(parseInt(expression1.charAt(2))))}`);

const expression2 = '5*7';
let operator2 = evaluate(expression2);
console.log(`${expression2} = ${operator2((parseInt(expression2.charAt(0))),(parseInt(expression2.charAt(2))))}`);

const expression3 = '6-1';
let operator3 = evaluate(expression3);
console.log(`${expression3} = ${operator3((parseInt(expression3.charAt(0))),(parseInt(expression3.charAt(2))))}`);

const expression4 = '9-2';
let operator4 = evaluate(expression4);
console.log(`${expression4} = ${operator4((parseInt(expression4.charAt(0))),(parseInt(expression4.charAt(2))))}`);

