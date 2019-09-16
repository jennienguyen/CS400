function breakStringonC(string) {
    return string.split(/(?=c)/g);
}
console.log(`${breakStringonC("supercalifragilisticexpialidocious")}`);