// Write a function that prints the cube value of its input (ie f(x)=x^3). Next, write a single line of
// code to call the function on each value of the array [1,2,3,4,5,6,7].

const cube = (x) => x*x*x;

const arr = [1, 2, 3, 4, 5, 6, 7];

mapIt = arr.map(n => cube(n));

console.log(mapIt);


